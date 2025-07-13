const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sanjut';

function authMiddleware(requiredRole) {
  return (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: 'No token' });
    try {
      const decoded = jwt.verify(auth.split(' ')[1], JWT_SECRET);
      if (requiredRole && decoded.role !== requiredRole) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
}

module.exports = authMiddleware;