module.exports = async (req, res, next) => {
    try {
        const { displayName } = req.body;
        if (!displayName || displayName.length < 8) {
            return res.status(400).send({ 
                message: '"displayName" length must be at least 8 characters long',
            });
        }
        next();
    } catch (err) {
        next(err);
    }
};