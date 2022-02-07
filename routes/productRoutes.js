const express = require('express');
const router = express.Router();
const ctrl = require('../controllers'); //methods relating to the products

//Route Resources:
router.get('/all', ctrl.products.retrieveAllProducts);
router.get('/:id', ctrl.products.retrieveProduct);
router.post('/new', ctrl.products.createProduct);
router.put('/update/:id', ctrl.products.updateProduct);
router.delete('/delete/:id', ctrl.products.deleteProduct);

module.exports = router