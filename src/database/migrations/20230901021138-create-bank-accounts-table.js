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
        allowNull: false,
        type: Sequelize.DATE()
      },
      accountNumber: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      accountType: {
        allowNull: false,
        type: Sequelize.STRING(8)
      },
      initialBalance: {
        allowNull: false,
        defaultValue: 0,
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE()
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('bankAccounts');
  }
};
