// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
ProductTag.belongsTo(category, )

// Categories have many Products
Category.hasMany(Product, )

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(ProductTag, )
// Tags belongToMany Products (through ProductTag)
ProductTag.belongToMany(Product, )

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
