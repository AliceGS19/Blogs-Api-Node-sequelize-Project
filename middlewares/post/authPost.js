module.exports = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        if (!title) {
            return res.status(400).send({ message: '"title" is required' });
        }
        if (!content) {
            return res.status(400).send({ message: '"content" is required' });
        }
        next();
    } catch (err) {
        next(err);
    }
};