const { updateById, getByIdWithoutUser } = require('../../services/post');
const { decodeToken } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const { id } = req.params;
        const userId = decodeToken(req.headers.authorization).id;
        const post = await getByIdWithoutUser(id);
        if (post.userId !== userId) {
            return res.status(401).send({ message: 'Unauthorized user' });
        }
        await updateById({ title, content, userId }, req.params.id);
        delete post.dataValues.published;
        delete post.dataValues.updated;
        post.dataValues.title = title;
        post.dataValues.content = content;
        console.log(post.dataValues);
        return res.status(200).send(post);
    } catch (err) {
        next(err);
    }
};