const error = require('./error');
const authToken = require('./authToken');

const authPost = require('./post/authPost');
const authCategories = require('./post/authCategories');

const authMail = require('./user/authMail');
const authPassword = require('./user/authPassword');
const authDisplayName = require('./user/authDisplayName');

const authLoginEmail = require('./login/authLoginEmail');
const authLoginPassword = require('./login/authLoginPassword');

const authCategory = require('./categories/authCategory');

module.exports = {
    post: {
        authPost,
        authCategories,
    },
    user: {
        authMail,
        authPassword,
        authDisplayName,
    },
    login: {
        authLoginEmail,
        authLoginPassword,
    },
    categories: {
        authCategory,
    },
    error,
    authToken,
};