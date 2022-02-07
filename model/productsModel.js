const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published: {
        type: Date,
        default: Date.now,
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

