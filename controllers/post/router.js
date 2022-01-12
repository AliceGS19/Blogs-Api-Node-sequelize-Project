const express = require('express');

const list = require('./list');
const create = require('./create');
const getPost = require('./getPost');

const { post:
    { 
        authPost,
        authCategories,
    }, 
    authToken } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authToken);

router.get('/', list);

router.get('/:id', getPost);

router.use(authPost, authCategories);

router.post('/', create);

module.exports = router;