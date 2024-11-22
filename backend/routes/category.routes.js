const express = require('express');
const Category = require('../models/category');
const router = express.Router();

// Add a category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const category = await newCategory.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
