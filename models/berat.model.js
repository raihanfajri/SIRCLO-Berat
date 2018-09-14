'use strict';
var sequelize = require('../connection');
module.exports = function(sequelize, DataTypes){
  return sequelize.define('Berat', {
    tanggal: DataTypes.DATE,
    max: DataTypes.INTEGER,
    min: DataTypes.INTEGER
  }, {});
};