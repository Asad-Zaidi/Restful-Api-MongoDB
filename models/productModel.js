const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: String,
    Model: String,
    price: Number,
    slug: {
        type: String,
        lowercase: true,
    }
});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;