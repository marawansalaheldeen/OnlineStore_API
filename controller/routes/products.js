const express = require('express');

const router = new express.Router();

const requests = require('./queries /funs');


router.get('/store/products',requests);

router.post('/store/products',requests);

router.patch('/store/products/:id',requests);

router.get('/store/product/delete/:id',requests);

module.exports = router
