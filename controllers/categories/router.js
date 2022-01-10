const express = require('express');

const list = require('./list');
const create = require('./create');

const { categories:
    { 
        authCategory,
    }, 
    authToken } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authToken);

router.get('/', list);

router.use(authCategory);

router.post('/', create);

module.exports = router;