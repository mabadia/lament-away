'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Business extends Model {


    static associate({ Comment }) {
      Business.hasMany(Comment, { foreignKey: 'businessId', as: 'comments' })
    }

  };

  Business.init({
    businessId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true

    },
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    address: DataTypes.STRING,
    pic: DataTypes.STRING,
    manager: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'Business',
  });
  return Business;
};