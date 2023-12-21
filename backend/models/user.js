'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({ Comment }) {
      User.hasMany(Comment, { as: 'author', foreignKey: 'authorId' })
    }

  };
  
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING
},
{
    sequelize,
    underscored: true,
    modelName: 'User',
  });
  return User;
};