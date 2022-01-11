const { Categories } = require('../../models');

module.exports = async (options) => {
    try {
        if (options) {
          const categories = Categories.findAll(options);
          return categories;
        }
        const categories = Categories.findAll();
        return categories;
    } catch (err) {
        return err;
    }
};