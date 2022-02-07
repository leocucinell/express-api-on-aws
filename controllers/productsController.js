/*
    This file contains the main methods relating to products
*/
//TODO: Connect to the database

//route: /new
const createProduct = () => {
    console.log('CREATE NEW PRODUCT');
}

//route: /:id
const retrieveProduct = () => {
    console.log('RETRIEVE PRODUCT');
}

//route: /update/:id
const updateProduct = () => {
    console.log('UPDATE PRODUCT');
}

//route: /delete/:id
const deleteProduct = () => {
    console.log('DELETE PRODUCT');
}

//route: /all
const retrieveAllProducts = () => {
    console.log('RETRIEVE ALL PRODUCTS');
}

module.exports = {
    createProduct,
    retrieveAllProducts,
    retrieveProduct,
    updateProduct,
    deleteProduct
}