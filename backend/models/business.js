'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    static associate({ Comment }) {
      Business.hasMany(Comment, { foreignKey: 'business_id', as: 'comments' })
    }
  };

  Business.init({
    businessId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    // pic: DataTypes.STRING,
    // manager: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Business',
  });
  return Business;
};