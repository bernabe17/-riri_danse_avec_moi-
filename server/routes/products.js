const express = require('express');
const router = express.Router();

// GET all products
router.get('/', (req, res) => {
  try {
    // TODO: Fetch from database
    const products = [
      {
        id: 1,
        name: 'Produit 1',
        price: 29.99,
        description: 'Description du produit 1',
        image: '/images/product1.jpg',
        category: 'electronique'
      },
      {
        id: 2,
        name: 'Produit 2',
        price: 49.99,
        description: 'Description du produit 2',
        image: '/images/product2.jpg',
        category: 'vetements'
      }
    ];
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET product by ID
router.get('/:id', (req, res) => {
  try {
    // TODO: Fetch from database by ID
    const product = {
      id: req.params.id,
      name: 'Produit détaillé',
      price: 29.99,
      description: 'Description complète du produit',
      image: '/images/product.jpg',
      category: 'electronique',
      stock: 50,
      reviews: []
    };
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create product (Admin only)
router.post('/', (req, res) => {
  try {
    // TODO: Validate admin, create product in database
    const newProduct = req.body;
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update product (Admin only)
router.put('/:id', (req, res) => {
  try {
    // TODO: Validate admin, update product in database
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE product (Admin only)
router.delete('/:id', (req, res) => {
  try {
    // TODO: Validate admin, delete product from database
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;