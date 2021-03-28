const { Menu } = require('../models');
const validatorjs = require("validatorjs");

function getBodyParams( params ) {

  const {
    nombre,
    tipo,
    clave
  } = params.body;

  return {
    nombre,
    tipo,
    clave
  };

}

function validatorParams( bodyParams = {} ) {

  const validator = new validatorjs( bodyParams, {
    nombre: 'required|string',
    tipo: 'required|string',
    clave: 'required|string'
  });

  return validator;

}

exports.create = async ( req, res ) => {
  try {
    
    const bodyParams = getBodyParams( req );
    const validator = validatorParams( bodyParams );

    if ( validator.fails() ) return res
      .status(201)
      .json({
        message: 'invalid_params',
        errors: validator.errors.errors
      });
    
    const menu = await Menu.create( bodyParams );

    return res
      .json(201)
      .message({
        message: 'created'
      });

  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}

exports.findAll = async ( req, res ) => {
  try {

    const menus = await Departamento.Menu({ where: { isDeleted: false } });

    return res
      .json( menus );
    
  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}

exports.findOne = async ( req, res ) => {
  try {

    const { id } = req.params;

    const menu = await Menu.findOne({ where: { id } });

    return res
      .json( menu );
    
  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}

exports.update = async ( req, res ) => {
  try {

    const { id } = req.params;

    const bodyParams = getBodyParams( req );
    const validator = validatorParams( bodyParams );

    if ( validator.fails() ) return res
      .status(201)
      .json({
        message: 'invalid_params',
        errors: validator.errors.errors
      });
    
    const menu = await Menu.update( bodyParams, {
      where: { id }
    });

    return res
      .status(202)
      .json({
        message: 'updated'
      });
    
  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}

exports.deleteOne = async ( req, res ) => {
  try {

    const { id } = req.params;
    
    const menu = await Menu.update( { isDeleted: false }, {
      where: { id }
    });

    return res
      .status(202)
      .json({
        message: 'deleted'
      });
    
  } catch (e) {
    console.log(e);
    
    return res
      .status(500)
      .json({
        message: "internal_error"
      });
  }
}



