const { getById } = require('../../services/user');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await getById(id);
        if (!user) {
            return res.status(404).send({ message: 'User does not exist' });
        }
        return res.status(200).send(user);
    } catch (err) {
        next(err);
    }
};