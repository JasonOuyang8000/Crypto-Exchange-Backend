'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, crypto, userCrypto}) {
      // define association here
      user.hasMany(userCrypto);
      user.belongsToMany(crypto, {through: 'userCrypto'});
    }
  };
  user.init({
    username: { 
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    balance: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 5000,
      max: 100000,
    }
  }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};