/*
    This file contains the main methods relating to products
*/
//TODO: Connect to the database

//ALL ROUTES BEGIN WITH : /products

//route: /new
const createProduct = (req, res) => {
    console.log('CREATE NEW PRODUCT');
}

//route: /:id
const retrieveProduct = (req, res) => {
    console.log('RETRIEVE PRODUCT');
    res.send('from retrieve single product route')
}

//route: /update/:id
const updateProduct = (req, res) => {
    console.log('UPDATE PRODUCT');
}

//route: /delete/:id
const deleteProduct = (req, res) => {
    console.log('DELETE PRODUCT');
}

//route: /all
const retrieveAllProducts = (req, res) => {
    console.log('RETRIEVE ALL PRODUCTS');
    res.send("Hello World!");
}

module.exports = {
    createProduct,
    retrieveAllProducts,
    retrieveProduct,
    updateProduct,
    deleteProduct
}