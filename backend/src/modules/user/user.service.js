const prisma = require('../../config/db');
const bcrypt = require('bcryptjs');

exports.getUsers = async (tenantId) => {
  const users = await prisma.user.findMany({
    where: { tenantId },
    include: {
      role: true,
      tenant: true
    },
    orderBy: { createdAt: 'desc' }
  });

  return users.map(user => ({
    id: user.id,
    name: `${user.firstName} ${user.lastName || ''}`.trim(),
    email: user.email,
    role: user.role ? user.role.name : 'Staff',
    roleId: user.roleId,
    department: user.department || 'N/A',
    team: user.team || 'N/A',
    company: user.tenant ? user.tenant.name : 'Unknown',
    status: user.status
  }));
};

exports.createUser = async (data) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      tenantId_email: {
        tenantId: data.tenantId,
        email: data.email
      }
    }
  });

  if (existingUser) {
    throw new Error('Email already exists');
  }

  // Find Role
  let roleId = null;
  if (data.role) {
    const role = await prisma.role.findFirst({
      where: { name: data.role, OR: [{ tenantId: data.tenantId }, { isSystem: true }] }
    });
    if (role) roleId = role.id;
  }

  const salt = await bcrypt.genSalt(10);
  // Using a default password or the provided one
  const passwordHash = await bcrypt.hash(data.password || 'password123', salt);

  const nameParts = data.name.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  const user = await prisma.user.create({
    data: {
      tenantId: data.tenantId,
      email: data.email,
      passwordHash,
      firstName,
      lastName,
      roleId,
      department: data.department,
      team: data.team,
      status: data.status || 'Active'
    },
    include: { role: true, tenant: true }
  });

  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName || ''}`.trim(),
    email: user.email,
    role: user.role ? user.role.name : 'Staff',
    roleId: user.roleId,
    department: user.department || 'N/A',
    team: user.team || 'N/A',
    company: user.tenant ? user.tenant.name : 'Unknown',
    status: user.status
  };
};

exports.updateUser = async (id, data) => {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');

  const updateData = {
    department: data.department,
    team: data.team,
    status: data.status
  };

  if (data.name) {
    const nameParts = data.name.split(' ');
    updateData.firstName = nameParts[0];
    updateData.lastName = nameParts.slice(1).join(' ');
  }

  if (data.email) updateData.email = data.email;

  if (data.role) {
    const role = await prisma.role.findFirst({
      where: { name: data.role, OR: [{ tenantId: existing.tenantId }, { isSystem: true }] }
    });
    if (role) updateData.roleId = role.id;
  }

  if (data.password) {
    const salt = await bcrypt.genSalt(10);
    updateData.passwordHash = await bcrypt.hash(data.password, salt);
  }

  const user = await prisma.user.update({
    where: { id },
    data: updateData,
    include: { role: true, tenant: true }
  });

  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName || ''}`.trim(),
    email: user.email,
    role: user.role ? user.role.name : 'Staff',
    roleId: user.roleId,
    department: user.department || 'N/A',
    team: user.team || 'N/A',
    company: user.tenant ? user.tenant.name : 'Unknown',
    status: user.status
  };
};

exports.deleteUser = async (id) => {
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');

  return await prisma.user.delete({
    where: { id }
  });
};
