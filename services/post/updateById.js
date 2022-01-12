const { BlogPosts } = require('../../models');

module.exports = async (newPost, id) => {
    try {
        const updatedPost = BlogPosts.create(newPost, { where: { id } });
        return updatedPost;
    } catch (err) {
        return err;
    }
};