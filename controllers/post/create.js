const postService = require('../../services/post');
const postCategoriesService = require('../../services/postCategories');
const categoriesService = require('../../services/categories');
const { decodeToken } = require('../../helpers');

module.exports = async (req, res, next) => {
    try {
        const { title, content, categoryIds } = req.body;
        const { id } = decodeToken(req.headers.authorization);
        const post = await postService.create({ userId: id, title, content });
        const categories = await categoriesService.getAll({ where: { id: categoryIds } });
        await postCategoriesService.create(post, categories);
        delete post.dataValues.published;
        delete post.dataValues.updated;
        return res.status(201).send(post);
    } catch (err) {
        next(err);
    }
};