const { Categories } = require('../../models');

module.exports = async (id) => {
    try {
        const category = Categories.findByPk(id);
        return category;
    } catch (err) {
        return err;
    }
};