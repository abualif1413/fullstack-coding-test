'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add altering commands here.
             *
             * Example:
             * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
             */
            return Promise.all([
                queryInterface.addColumn('product', 'customer_id', {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'customer',
                        key: 'customer_id',
                    },
                    onUpdate: "CASCADE",
                }),
                queryInterface.addColumn('product', 'product_type_id', {
                    type: Sequelize.INTEGER,
                    references: {
                        model: 'product-type',
                        key: 'product_type_id',
                    },
                    onUpdate: "CASCADE",
                }),
            ]);
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            /**
             * Add reverting commands here.
             *
             * Example:
             * await queryInterface.dropTable('users');
             */
        });
    }
};
