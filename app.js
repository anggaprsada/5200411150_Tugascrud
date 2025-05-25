const express = require('express');
const app = express();
const brandRoutes = require('./routes/product_brand');
const catalogRoutes = require('./routes/product_catalog');

app.use(express.json());

// Prefix routes
app.use('/brands', brandRoutes);
app.use('/products', catalogRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
