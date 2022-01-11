module.exports = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        if (!title) {
            return res.status(400).send({ message: '"title" is required' });
        }
        if (!content) {
            return res.status(400).send({ message: '"content" is required' });
        }
        if (!categoryIds) {
            return res.status(400).send({ message: '"categoryIds" is required' });
        }
        next();
    } catch (err) {
        next(err);
    }
};