const jwt = require('jsonwebtoken');
const { sendError } = require('../core/response');

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 'Authentication token is missing', 'UNAUTHORIZED', [], 401);
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

    req.user = decoded; // { userId, tenantId, roleId }
    next();
  } catch (error) {
    return sendError(res, 'Invalid or expired token', 'UNAUTHORIZED', [], 401);
  }
};

module.exports = authMiddleware;
