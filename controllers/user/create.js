const { create } = require('../../services/user');
const { generateToken } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const newUser = (await create(req.body)).dataValues;
        delete newUser.password;
        delete newUser.email;
        const token = generateToken(newUser);
        return res.status(201).send({ token });
    } catch (err) {
        next(err);
    }
};