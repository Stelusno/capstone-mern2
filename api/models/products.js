const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    description: { type: String },
    price: { type: Number },
    size: { type: String },
    // image: { type: String },
  },
  { timestamp: true }
);

const Products = mongoose.model('Products', productsSchema);
module.exports = Products;
