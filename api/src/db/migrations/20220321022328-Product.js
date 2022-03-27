'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('product', {
      product_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      delivery_status: {
        type: Sequelize.ENUM("PENDING", "ORDERED", "SHIPPED", "CANCELLED"),
      },
      delivery_address: Sequelize.STRING,
      estimated_delivery_date: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('product');
  }
};
