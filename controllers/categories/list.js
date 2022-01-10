const { getAll } = require('../../services/categories');

module.exports = async (_req, res, next) => {
    try {
        const categories = await getAll();
        return res.status(200).send(categories);
    } catch (err) {
        next(err);
    }
};