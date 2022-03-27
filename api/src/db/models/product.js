'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.belongsToMany(models.Customer, {
      //   foreignKey: "customer_id",
      // });
      // Product.belongsToMany(models.ProductType, {
      //   foreignKey: "product_type_id",
      // });
    }
  }
  Product.init({
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: DataTypes.INTEGER,
    product_type_id: DataTypes.INTEGER,
    delivery_status: {
      type: DataTypes.ENUM("PENDING", "ORDERED", "SHIPPED", "CANCELLED"),
    },
    delivery_address: DataTypes.STRING,
    estimated_delivery_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Product;
};