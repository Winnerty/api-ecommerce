const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const invoiceSchema = new mongoose.Schema({
    number: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, default: 1 },
    }],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
    shippingAddress: {
        street: String,
        city: String,
        postalCode: String,
        country: String,
    },
})

invoiceSchema.plugin(uniqueValidator)

module.exports = mongoose.model("invoiceSchema", invoiceSchema)