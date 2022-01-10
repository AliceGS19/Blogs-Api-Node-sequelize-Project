const { Users } = require('../../models');

module.exports = async (userEmail) => {
    try {
        const user = Users.findOne({ where: { email: userEmail } });
        return user;
    } catch (err) {
        return err;
    }
};