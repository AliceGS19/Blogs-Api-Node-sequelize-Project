const express = require('express');

const list = require('./list');
const create = require('./create');
const getUser = require('./getUser');

const { user: 
    { 
        authMail,
        authPassword,
        authDisplayName,
    }, 
    authToken } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.post('/', authDisplayName, authMail, authPassword, create);

router.use(authToken);

router.get('/', list);

router.get('/:id', getUser);

module.exports = router;