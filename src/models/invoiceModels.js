const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const invoiceSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    }
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model("userSchema", invoiceSchema)