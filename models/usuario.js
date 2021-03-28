'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo( models.Perfil, {
        as: 'perfil',
        foreignKey: 'idPerfil'
      });

      this.belongsTo( models.Puesto, {
        as: 'Puesto',
        foreignKey: 'idPuesto'
      });


    }
  };
  Usuario.init({
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nombreCompleto: DataTypes.STRING,
    celular: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imagen: DataTypes.STRING,
    urlImagen: DataTypes.STRING,
    idPerfil: DataTypes.INTEGER,
    idPuesto: DataTypes.INTEGER,
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    hooks: {

      beforeCreate: ( usuario ) => {

        const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;

        usuario.nombreCompleto = nombreCompleto;

      },

      beforeUpdate: ( usuario ) => {

        const nombreCompleto = `${usuario.nombre} ${usuario.apellidos}`;

        usuario.nombreCompleto = nombreCompleto;

      }

    }
    
  });
  return Usuario;
};