const { generateToken } = require('../../helpers');
const { getByMail } = require('../../services/user');

module.exports = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = (await getByMail(email));
        if (!user) {
            return res.status(400).send({ message: 'Invalid fields' });
        }
        if (user.password !== password) {
            return res.status(400).send({ message: '"password" is incorrect' });
        }
        const userCopy = user.dataValues;
        delete userCopy.password;
        delete userCopy.email;
        const token = generateToken(userCopy);
        return res.status(200).send({ token });
    } catch (err) {
        next(err);
    }
};