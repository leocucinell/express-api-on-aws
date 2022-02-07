const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: uuid.v4()
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

