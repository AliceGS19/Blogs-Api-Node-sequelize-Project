const express = require('express');
const create = require('./create');
const { user: { authMail, authPassword, authDisplayName } } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authDisplayName);
router.use(authMail);
router.use(authPassword);
router.post('/', create);

module.exports = router;