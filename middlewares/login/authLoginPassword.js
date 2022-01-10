module.exports = async (req, res, next) => {
    try {
        const { password } = req.body;
        if (password === undefined || password === null) {
            return res.status(400).send({ message: '"password" is required' });
        } if (password.length === 0) {
            return res.status(400).send({ message: '"password" is not allowed to be empty' });
        }
        next();
    } catch (err) {
        next(err);
    }
};