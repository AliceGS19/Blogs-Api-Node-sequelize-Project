const { getAll } = require('../../services/post');

module.exports = async (_req, res, next) => {
    try {
        const posts = await getAll();
        return res.status(200).send(posts);
    } catch (err) {
        next(err);
    }
};