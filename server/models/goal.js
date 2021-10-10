'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Goal.init({
    title: DataTypes.STRING,
    tf: DataTypes.STRING,
    ed: DataTypes.STRING,
    mgd: DataTypes.STRING,
    sg1title: DataTypes.STRING,
    sgtf: DataTypes.STRING,
    sged: DataTypes.STRING,
    sggd: DataTypes.STRING,
    sg2title: DataTypes.STRING,
    sg2tf: DataTypes.STRING,
    sg2ed: DataTypes.STRING,
    sg2gd: DataTypes.STRING,
    sg3t: DataTypes.STRING,
    sg3tf: DataTypes.STRING,
    sg3ed: DataTypes.STRING,
    sg3gd: DataTypes.STRING,
    sg4t: DataTypes.STRING,
    sg4tf: DataTypes.STRING,
    sg4ed: DataTypes.STRING,
    sg4gd: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Goal',
  });
  return Goal;
};