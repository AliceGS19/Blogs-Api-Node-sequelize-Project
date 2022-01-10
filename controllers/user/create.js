const { create } = require('../../services/user');
const { generateToken } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const newUser = req.body;
        await create(newUser);
        delete newUser.password;
        delete newUser.email;
        const token = generateToken(newUser);
        return res.status(201).send({ token });
    } catch (err) {
        next(err);
    }
};