const prisma = require('../../config/db');

exports.getRoles = async (tenantId) => {
  const roles = await prisma.role.findMany({
    where: {
      OR: [
        { tenantId },
        { isSystem: true }
      ]
    },
    include: {
      _count: { select: { users: true } },
      permissions: {
        include: { permission: true }
      }
    },
    orderBy: [
      { isSystem: 'desc' },
      { createdAt: 'asc' }
    ]
  });

  // Transform permissions array into an object for easier frontend parsing
  return roles.map(role => {
    const formattedPermissions = {};
    role.permissions.forEach(rp => {
      const mod = rp.permission.resource;
      const act = rp.permission.action;
      if (!formattedPermissions[mod]) {
        formattedPermissions[mod] = { read: false, write: false, delete: false };
      }
      formattedPermissions[mod][act] = true;
    });

    return {
      id: role.id,
      name: role.name,
      description: role.description,
      isSystem: role.isSystem,
      users: role._count.users,
      permissions: formattedPermissions
    };
  });
};

exports.createRole = async (data) => {
  return await prisma.role.create({
    data: {
      name: data.name,
      description: data.description,
      tenantId: data.tenantId,
      isSystem: false
    }
  });
};

exports.updateRole = async (id, data) => {
  const existing = await prisma.role.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');
  if (existing.isSystem) throw new Error('Cannot edit system roles');

  return await prisma.role.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description
    }
  });
};

exports.deleteRole = async (id) => {
  const existing = await prisma.role.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');
  if (existing.isSystem) throw new Error('Cannot delete system roles');

  return await prisma.role.delete({
    where: { id }
  });
};

exports.updatePermissions = async (roleId, permissionsMatrix) => {
  // permissionsMatrix format: { "CRM": { read: true, write: false, delete: false }, ... }
  const existing = await prisma.role.findUnique({ where: { id: roleId } });
  if (!existing) throw new Error('Not found');

  // Find all available permissions from DB to get their IDs
  const allPerms = await prisma.permission.findMany();
  
  // Determine which permission IDs to assign
  const idsToAssign = [];
  
  Object.keys(permissionsMatrix).forEach(module => {
    const actions = permissionsMatrix[module];
    ['read', 'write', 'delete'].forEach(action => {
      if (actions[action]) {
        const perm = allPerms.find(p => p.resource === module && p.action === action);
        if (perm) idsToAssign.push(perm.id);
      }
    });
  });

  // Transaction: Delete existing permissions for this role, then create new ones
  await prisma.$transaction([
    prisma.rolePermission.deleteMany({
      where: { roleId }
    }),
    prisma.rolePermission.createMany({
      data: idsToAssign.map(pid => ({
        roleId,
        permissionId: pid
      }))
    })
  ]);

  return { success: true };
};
