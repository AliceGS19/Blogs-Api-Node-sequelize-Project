const express = require('express');
// const post = require('./post/router');
const user = require('./user/router');
// const login = require('./login/router');
// const categories = require('./categories/router');

const root = express.Router({ mergeParams: true });

root.use('/user', user);
// root.use('/post', post);
// root.use('/login', login);
// root.use('/categories', categories);

module.exports = root;