const express = require('express');

const create = require('./create');

const { post:
    { 
        authPost,
        authCategories,
    }, 
    authToken } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authToken);

router.use(authPost, authCategories);

router.post('/', create);

module.exports = router;