const express = require('express');
const router = express.Router();
const { product_brand } = require('../models');

// Create brand
router.post('/', async (req, res) => {
  try {
    const brand = await product_brand.create(req.body);
    res.status(201).json(brand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create brand' });
  }
});

// Get all brands
router.get('/', async (req, res) => {
  try {
    const brands = await product_brand.findAll();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve brands' });
  }
});

// Update brand
router.put('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const brand = await product_brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    await brand.update(req.body);
    res.json({ message: 'Brand updated', updatedBrand: brand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update brand' });
  }
});

// Delete brand
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const brand = await product_brand.findByPk(id);
    if (!brand) {
      return res.status(404).json({ error: 'Brand not found' });
    }

    await brand.destroy();
    res.json({ message: 'Brand deleted', deletedBrand: brand });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete brand' });
  }
});

module.exports = router;
