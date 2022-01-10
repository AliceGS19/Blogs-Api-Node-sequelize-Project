const express = require('express');
const login = require('./login');
const { login: { authLoginEmail, authLoginPassword } } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authLoginEmail);
router.use(authLoginPassword);
router.post('/', login);

module.exports = router;