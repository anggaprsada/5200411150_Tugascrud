'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCatalog = sequelize.define('product_catalog', {
    product_name: DataTypes.STRING,
    type: DataTypes.STRING,
    brand_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });

  ProductCatalog.associate = function(models) {
    ProductCatalog.belongsTo(models.product_brand, {
      foreignKey: 'brand_id',
      as: 'brand'
    });
  };

  return ProductCatalog;
};
