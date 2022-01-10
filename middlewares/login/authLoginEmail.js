module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (email === undefined || email === null) {
            return res.status(400).send({ message: '"email" is required' });
        } if (email.length === 0) {
            return res.status(400).send({ message: '"email" is not allowed to be empty' });
        }
        next();
    } catch (err) {
        next(err);
    }
};