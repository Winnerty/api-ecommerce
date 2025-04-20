const Product = require("../models/productModels");
const Invoice = require("../models/invoiceModels");

exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find().populate("user").populate("products.product");
        res.json(invoices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getInvoiceById = async (req, res) => {
    try {
        const invoice = await Invoice.findById(req.params.id).populate("user").populate("products.product");
        if (!invoice) {
            return res.status(404).json({ message: "Invoice not found" });
        }
        res.json(invoice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createInvoice = async (req, res) => {
    try {
        const { number, user, products, paymentStatus, shippingAddress } = req.body;
        const userId = req.user._id;
  
        if (!products || products.length === 0) {
            return res.status(400).json({ message: "No products provided" });
        }

        let totalAmount = 0;

        for (const item of products) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ message: `Product not found: ${item.product}` });
            }
            totalAmount += product.price * item.quantity;
        }

        const invoice = new Invoice({
            number,
            user: userId,
            products,
            totalAmount,
            paymentStatus: paymentStatus || 'pending',
            shippingAddress
        });
  
        const newInvoice = await invoice.save();
        res.status(201).json(newInvoice);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error creating invoice", error: err.message });
    }
}