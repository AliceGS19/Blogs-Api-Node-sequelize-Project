const { Users } = require('../../models');

module.exports = async (user) => {
    try {
        const createdUser = Users.create(user);
        return createdUser;
    } catch (err) {
        return err;
    }
};