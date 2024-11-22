const express = require('express');
const Product = require('../models/product');
const router = express.Router();

// Add a product
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const product = await newProduct.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('category');
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
