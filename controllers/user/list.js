const { getAll } = require('../../services/user');

module.exports = async (_req, res, next) => {
    try {
        const users = await getAll();
        return res.status(200).send(users);
    } catch (err) {
        next(err);
    }
};