const { create } = require('../../services/categories');

module.exports = async (req, res, next) => {
    try {
        const newCategory = await create(req.body);
        return res.status(201).send(newCategory);
    } catch (err) {
        next(err);
    }
};