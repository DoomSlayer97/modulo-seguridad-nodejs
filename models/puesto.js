'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Puesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany( models.Usuario, {
        as: 'usuarios',
        foreignKey: 'idUsuario'
      });

      this.belongsTo( models.Departamento, {
        as: 'departamento',
        foreignKey: 'idDepartamento'
      });

    }
  };
  Puesto.init({
    nombre: DataTypes.STRING,
    valor: DataTypes.STRING,
    default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    idDepartamento: DataTypes.INTEGER,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Puesto',
  });
  return Puesto;
};