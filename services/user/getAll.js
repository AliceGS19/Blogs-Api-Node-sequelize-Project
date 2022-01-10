const { Users } = require('../../models');

module.exports = async () => {
    try {
        const users = Users.findAll();
        return users;
    } catch (err) {
        return err;
    }
};