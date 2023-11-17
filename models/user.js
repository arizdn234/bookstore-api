'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt.helper');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: 'Email is required.' },
        isEmail: { msg: 'Email not valid.' }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Password is required.' },
        len: [8, 30]
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(User) {
        User.password = hashPassword(User.password)
      }
    },
    sequelize,
    modelName: 'User',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return User;
};