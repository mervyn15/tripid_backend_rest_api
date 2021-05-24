'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tripId: {
        type: Sequelize.INTEGER
      },
      transactionId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      checkInDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      checkOutDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      rate: {
        type: Sequelize.DECIMAL
      },
      extraFee: {
        type: Sequelize.DECIMAL
      },
      amountPaid: {
        type: Sequelize.DECIMAL
      },
      isRefund: {
        type: Sequelize.BOOLEAN
      },
      bookingDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      cancelDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      slotsTaken: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};