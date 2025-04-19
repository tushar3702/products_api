const express = require('express');
const router = express.Router();
const getProducts = require('../controllers/products');

router.route('/').get(getProducts.getAllProducts);
router.route('/testing').get(getProducts.getAllProductsTesting);

module.exports = router;


