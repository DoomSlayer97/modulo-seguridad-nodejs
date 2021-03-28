const { Departamento } = require('../models/departamento');
const validatorjs = require("validatorjs");

function getBodyParams( params ) {

  const {
    nombre,
    valor
  } = params.body;

  return {
    nombre,
    valor
  };

}

function validatorParams( bodyParams = {} ) {

  const validator = new validatorjs( bodyParams, {
    nombre: 'required|string',
    valor: 'required|string',
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
    
    const departamento = await Departamento.create( bodyParams );

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

    const departamentos = await Departamento.findAll({ where: { isDeleted: false } });

    return res
      .json( departamentos );
    
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

    const departamento = await Departamento.findOne({ where: { id } });

    return res
      .json( departamento );
    
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
    
    const departamento = await Departamento.update( bodyParams, {
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
    
    const departamento = await Departamento.update( { isDeleted: false }, {
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

