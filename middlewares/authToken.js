const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    const SECRET = process.env.JWT_SECRET;
    if (!authorization) {
        return res.status(401).send({ message: 'Token not found' });
    }
    const notValid = jwt.verify(authorization, SECRET, (err, _decoded) => {
        if (err) return res.status(401).send({ message: 'Expired or invalid token' });
    });
    if (notValid) return notValid;
    next();
};