const { BlogPosts } = require('../../models');

module.exports = async (post) => {
    try {
        const createdPost = BlogPosts.create(post);
        return createdPost;
    } catch (err) {
        return err;
    }
};