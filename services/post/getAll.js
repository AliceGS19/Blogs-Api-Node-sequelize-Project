const { Users, BlogPosts, Categories } = require('../../models');

module.exports = async () => {
    try {
        const posts = BlogPosts.findAll({
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
        return posts;
    } catch (err) {
        return err;
    }
};