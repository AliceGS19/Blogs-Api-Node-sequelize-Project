module.exports = async (req, res, next) => {
    try {
        const { categoryIds } = req.body;
        if (categoryIds) {
            return res.status(400).send({ message: 'Categories cannot be edited' });
        }
        next();
    } catch (err) {
        next(err);
    }
};