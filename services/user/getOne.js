const { Users } = require('../../models');

module.exports = async (id) => {
    try {
        const user = Users.findByPk(id);
        return user;
    } catch (err) {
        return err;
    }
};