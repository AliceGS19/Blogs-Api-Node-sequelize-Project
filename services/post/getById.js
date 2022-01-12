const { Users, BlogPosts, Categories } = require('../../models');

module.exports = async (id) => {
    try {
        const post = BlogPosts.findByPk(id, {
            include: [
                {
                  model: Users,
                  as: 'user',
                  attributes: { exclude: ['password'] },
                },
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