'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
  
    static associate({ User, Business }) {
      Comment.belongsTo(Business, { as: 'business', foreignKey: 'businessId' })
      Comment.belongsTo(User, { as: 'author', foreignKey: 'authorId' })
    }

  };
  Comment.init({
    commentId: {
      type:  DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    businessId: DataTypes.SMALLINT,
    authorId: DataTypes.SMALLINT,
    content: DataTypes.STRING,
    thumbsUp: DataTypes.FLOAT, 
    thumbsDown: DataTypes.FLOAT,
    lament: DataTypes.BOOLEAN
  }, {
    sequelize,
    underscored: true,
    modelName: 'Comment',
  });
  return Comment;

};