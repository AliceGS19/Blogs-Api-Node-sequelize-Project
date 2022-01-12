const { getById } = require('../../services/post');

module.exports = async (req, res, next) => {
    try {
        const post = await getById(req.params.id);
        if (!post) {
            return res.status(404).send({ message: 'Post does not exist' });
        }
        return res.status(200).send(post);
    } catch (err) {
        next(err);
    }
};