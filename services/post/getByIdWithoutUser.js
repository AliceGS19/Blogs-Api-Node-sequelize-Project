const { BlogPosts, Categories } = require('../../models');

module.exports = async (id) => {
    try {
        const post = BlogPosts.findByPk(id, {
            include: [
                {
                  model: Categories,
                  as: 'categories',
                },
            ],
        });
        return post;
    } catch (err) {
        return err;
    }
};