'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    contact_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customer',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return Customer;
};