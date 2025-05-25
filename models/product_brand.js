'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductBrand = sequelize.define('product_brand', {
    brand_name: DataTypes.STRING
  }, {
    underscored: true,
  });

  ProductBrand.associate = function(models) {
    ProductBrand.hasMany(models.product_catalog, {
      foreignKey: 'brand_id'
    });
  };

  return ProductBrand;
};
