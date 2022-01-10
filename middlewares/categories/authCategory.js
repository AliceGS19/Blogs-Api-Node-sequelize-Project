module.exports = async (req, res, next) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).send({ 
                message: '"name" is required',
            });
        }
        next();
    } catch (err) {
        next(err);
    }
};