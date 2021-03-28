'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany( models.Puesto, {
        as: 'puestos',
        foreignKey: 'idDepartamento'
      });

    }
  };
  Departamento.init({
    nombre: DataTypes.STRING,
    valor: DataTypes.STRING,
    default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Departamento',
  });
  return Departamento;
};