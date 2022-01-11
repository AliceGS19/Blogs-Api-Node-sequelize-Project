module.exports = async (post, categories) => {
    try {
        const createdPostCategories = post.addCategories(categories);
        return createdPostCategories;
    } catch (err) {
        return err;
    }
};