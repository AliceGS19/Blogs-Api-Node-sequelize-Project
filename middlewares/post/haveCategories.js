module.exports = async (req, res, next) => {
    try {
        const { categoryIds } = req.body;
        if (!categoryIds) {
            return res.status(400).send({ message: '"categoryIds" is required' });
        }
        next();
    } catch (err) {
        next(err);
    }
};