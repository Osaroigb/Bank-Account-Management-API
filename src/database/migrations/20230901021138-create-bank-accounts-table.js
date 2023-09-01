'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bankAccounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER().UNSIGNED
      },
      accountName: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      dateOfBirth: {
        allowNull: true,
        type: Sequelize.STRING(10)
      },
      accountNumber: {
        allowNull: false,
        type: Sequelize.INTEGER()
      },
      accountType: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      initialBalance: {
        allowNull: false,
        defaultValue: 0.00,
        type: Sequelize.DECIMAL(10, 2).UNSIGNED
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('bankAccounts');
  }
};
