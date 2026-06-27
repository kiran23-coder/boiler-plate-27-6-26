const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const prisma = require('../../config/db');

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user.id, tenantId: user.tenantId, roleId: user.roleId },
    process.env.JWT_SECRET || 'secret',
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
  
  return { accessToken };
};

exports.login = async (email, password) => {
  // Find user by email
  const user = await prisma.user.findFirst({
    where: { email },
    include: { tenant: true }
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const tokens = generateTokens(user);

  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      tenantId: user.tenantId,
      tenantName: user.tenant?.name
    },
    tokens
  };
};

exports.register = async (data) => {
  // Check if user exists
  const existingUser = await prisma.user.findFirst({
    where: { email: data.email }
  });

  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create Tenant
  const tenant = await prisma.tenant.create({
    data: {
      name: data.tenantName,
      domain: data.tenantName.toLowerCase().replace(/[^a-z0-9]/g, '') + '.kiaan.core'
    }
  });

  // Hash password
  const passwordHash = await bcrypt.hash(data.password, 10);

  // Create User
  const user = await prisma.user.create({
    data: {
      tenantId: tenant.id,
      email: data.email,
      passwordHash,
      firstName: data.firstName,
      lastName: data.lastName,
    }
  });

  const tokens = generateTokens(user);

  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      tenantId: user.tenantId,
      tenantName: tenant.name
    },
    tokens
  };
};
