/*
    This file contains the main methods relating to products
*/
//Connect to the database
const models = require('../model')
//Specific models
const Product = models.product


//ALL ROUTES BEGIN WITH : /products
//POST route: /new 
const createProduct = (req, res) => {
    console.log(req.body);
    const newProduct = Product({
        title: req.body.title,
        description: req.body.description
    });
    newProduct.save((err) => {
        if(err){
            console.log(err);
        }
    });
    res.send('product successfully saved!');
}

//GET route: /:id
const retrieveProduct = (req, res) => {
    const itemResponse = Product.find({id: req.params.id}, (err, result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
}

//PUT route: /update/:id
const updateProduct = (req, res) => {
    console.log('UPDATE PRODUCT');
}

//DELETE route: /delete/:id
const deleteProduct = (req, res) => {
    console.log('DELETE PRODUCT');
}

//GET route: /all
const retrieveAllProducts = (req, res) => {
    const mdbResponse = Product.find({}, (err, result) => {
        if(err){
            console.log('~~ ERROR RETRIEVING ALL ITEMS ~~');
            console.log(err);
        } else {
            res.send(result);
        }
    });
}

module.exports = {
    createProduct,
    retrieveAllProducts,
    retrieveProduct,
    updateProduct,
    deleteProduct
}