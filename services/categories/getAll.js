const { Categories } = require('../../models');

module.exports = async () => {
    try {
        const categories = Categories.findAll();
        return categories;
    } catch (err) {
        return err;
    }
};