'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userCrypto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user, userCrypto}) {
      // define association here
      userCrypto.belongsTo(user);
    }
  };
  userCrypto.init({
    userId: DataTypes.INTEGER,
    cryptoId: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'userCrypto',
  });
  return userCrypto;
};