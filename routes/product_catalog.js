const express = require('express');
const router = express.Router();
const { product_catalog, product_brand } = require('../models');

// Create product
router.post('/', async (req, res) => {
  try {
    const product = await product_catalog.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// Get all products (with brand)
router.get('/', async (req, res) => {
  try {
    const products = await product_catalog.findAll({
      include: {
        model: product_brand,
        as: 'brand'
      }
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

// Update product
router.put('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const product = await product_catalog.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.update(req.body);
    res.json({ message: 'Product updated', updatedProduct: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// Delete product
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const product = await product_catalog.findByPk(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await product.destroy();
    res.json({ message: 'Product deleted', deletedProduct: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
