'use strict';
// catRoute

const express = require('express');
const multer = require('multer');
const upload = multer ({dest: './uploads/'});
const { cat_list_get, cat_get, cat_post, cat_put, cat_delete } = require('../controllers/catController');
const router = express.Router();

// router.route('/')
// .get(cat_list_get)
// .post(upload.single('cat'), cat_post)
// .put( cat_put);

// router.route('/:id')
// .get( cat_get)
// .delete(cat_delete);


router.get('/', cat_list_get);

router.post('/', upload.single('cat'), cat_post);

router.put('/', cat_put);

router.get('/:id', cat_get);

router.delete('/:id', cat_delete)

module.exports = router;