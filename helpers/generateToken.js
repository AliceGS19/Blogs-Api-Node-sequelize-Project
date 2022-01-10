const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (user) => {
    const SECRET = process.env.JWT_SECRET;
    const CONFIG = { expiresIn: '1h' };
    const token = jwt.sign(user, SECRET, CONFIG);
    return token;
};