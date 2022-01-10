const { Categories } = require('../../models');

module.exports = async (category) => {
    try {
        const createdCategory = Categories.create(category);
        return createdCategory;
    } catch (err) {
        return err;
    }
};