const error = require('./error');
const authToken = require('./authToken');

const authMail = require('./user/authMail');
const authPassword = require('./user/authPassword');
const authDisplayName = require('./user/authDisplayName');

const authLoginEmail = require('./login/authLoginEmail');
const authLoginPassword = require('./login/authLoginPassword');

module.exports = {
    user: {
        authMail,
        authPassword,
        authDisplayName,
    },
    login: {
        authLoginEmail,
        authLoginPassword,
    },
    error,
    authToken,
};