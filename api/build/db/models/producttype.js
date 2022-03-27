'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ProductType.init({
        product_type_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'ProductType',
        tableName: 'product-type',
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    });
    return ProductType;
};
