'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      tf: {
        type: Sequelize.STRING
      },
      ed: {
        type: Sequelize.STRING
      },
      mgd: {
        type: Sequelize.STRING
      },
      sg1title: {
        type: Sequelize.STRING
      },
      sgtf: {
        type: Sequelize.STRING
      },
      sged: {
        type: Sequelize.STRING
      },
      sggd: {
        type: Sequelize.STRING
      },
      sg2title: {
        type: Sequelize.STRING
      },
      sg2tf: {
        type: Sequelize.STRING
      },
      sg2ed: {
        type: Sequelize.STRING
      },
      sg2gd: {
        type: Sequelize.STRING
      },
      sg3t: {
        type: Sequelize.STRING
      },
      sg3tf: {
        type: Sequelize.STRING
      },
      sg3ed: {
        type: Sequelize.STRING
      },
      sg3gd: {
        type: Sequelize.STRING
      },
      sg4t: {
        type: Sequelize.STRING
      },
      sg4tf: {
        type: Sequelize.STRING
      },
      sg4ed: {
        type: Sequelize.STRING
      },
      sg4gd: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Goals');
  }
};