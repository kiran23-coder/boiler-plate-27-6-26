const prisma = require('../../config/db');

exports.getAllTenants = async () => {
  // In a real app, verify Super Admin here. For demo, we return all.
  return await prisma.tenant.findMany({
    orderBy: { createdAt: 'desc' }
  });
};

exports.createTenant = async (data) => {
  return await prisma.tenant.create({
    data: {
      name: data.name,
      industry: data.industry,
      employees: data.employees,
      country: data.country,
      state: data.state,
      city: data.city,
      tags: data.tags,
      category: data.category,
      status: data.status || 'ACTIVE'
    }
  });
};

exports.updateTenant = async (id, data) => {
  const existing = await prisma.tenant.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');

  return await prisma.tenant.update({
    where: { id },
    data: {
      name: data.name,
      industry: data.industry,
      employees: data.employees,
      country: data.country,
      state: data.state,
      city: data.city,
      tags: data.tags,
      category: data.category,
      status: data.status
    }
  });
};

exports.deleteTenant = async (id) => {
  const existing = await prisma.tenant.findUnique({ where: { id } });
  if (!existing) throw new Error('Not found');

  return await prisma.tenant.delete({
    where: { id }
  });
};
