'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    tripName: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    tripTypeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};
