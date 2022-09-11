// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongTo(Category,{
  foreignkey: 'category_id',
});
// Categories have many Products
Category.hasmany(Product, {
  foreignkey: 'category_id',
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag,{
  through: "ProductTag",
});

// Tags belongToMany Products (through ProductTag)

Tag.belongTomant(Product,{
  through: "ProductTag",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
