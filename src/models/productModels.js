const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    category: { type: String },
    images: [{ type: String }]
})

productSchema.plugin(uniqueValidator)

module.exports = mongoose.model("productSchema", productSchema)