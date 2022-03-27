'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return Promise.all([
      queryInterface.addColumn(
        'product',
        'customer_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'customer',
            key: 'customer_id',
          },
          onUpdate: "CASCADE",
        }
      ),
      queryInterface.addColumn(
        'product',
        'product_type_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'product-type',
            key: 'product_type_id',
          },
          onUpdate: "CASCADE",
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
