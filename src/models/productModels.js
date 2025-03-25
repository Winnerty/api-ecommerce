const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("userSchema", productSchema)