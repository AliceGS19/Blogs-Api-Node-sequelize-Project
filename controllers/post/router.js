const express = require('express');

const list = require('./list');
const create = require('./create');
const update = require('./update');
const getPost = require('./getPost');

const { post:
    { 
        authPost,
        authCategories,
        haveCategories,
        notHaveCategories,
    }, 
    authToken } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(authToken);

router.get('/', list);

router.get('/:id', getPost);

router.use(authPost);

router.put('/:id', notHaveCategories, update);

router.use(haveCategories, authCategories);

router.post('/', create);

module.exports = router;