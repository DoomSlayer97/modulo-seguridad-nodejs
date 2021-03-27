const { Perfil } = require("../models");
const validatorjs = require("validatorjs");

function getBodyParams( params ) {

  const {
    nombre,
    valor
  } = req.body;

  return {
    nombre,
    valor
  }

}

function validatorParams( bodyParams = {} ) {

  const validator = new validatorjs( bodyParams, {
    nombre: "required|string",
    valor: "required|string"
  });

  return validator;

}

exports.create = async ( req, res ) => {
  try {

    const bodyParams = getBodyParams( req );
    const validator = validatorParams( bodyParams );

    if ( validator.fails() ) return res
      .status(403)
      .json({
        message: "invalid_params",
        errors: validator.errors.errors
      });

    const perfil = await Perfil.create( bodyParams );

    return res
      .json(201)
      .message({
        message: "created"
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

    const perfiles = await Perfil.findAll({ where: { isDeleted: false } });

    return res
      .json( perfiles );
    
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

    const perfil = await Perfil.findByPk( id );

    return res
      .json( perfil );
    
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
      .status(403)
      .json({
        message: "invalid_params",
        errors: validator.errors.errors
      });

    const perfil = await Perfil.update( bodyParams, {
      where: { id }
    });

    return res
      .status(202)
      .json({
        message: "updated"
      })
    
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
    
    await Perfil.update({ isDeleted: true }, {
      where: { id }
    });

    return res
      .status(202)
      .json({
        message: "deleted"
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
