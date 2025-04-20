const Product = require("../models/productModels")

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Failed to get products", error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: "Error getting product", error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, description, price, stock, category, images } = req.body;
  
        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            category,
            images,
        });
  
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: "Failed to create product", error: err.message });
    }
};