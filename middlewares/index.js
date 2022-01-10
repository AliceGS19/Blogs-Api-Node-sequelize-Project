const authMail = require('./user/authMail');
const authPassword = require('./user/authPassword');
const authDisplayName = require('./user/authDisplayName');
const error = require('./error');

module.exports = {
    user: {
        authMail,
        authPassword,
        authDisplayName,
    },
    error,
};