const { Usuario } = require("../models");
const validatorjs = require("validatorjs");
const pager = require('../utils/pager');

function getBodyParams( params ) {

  const {
    nombre,
    apellidos,
    celular,
    email,
    password,
    imagen,
    urlImagen,
  } = req.body;

  return {
    nombre,
    apellidos,
    celular,
    email,
    password,
    imagen,
    urlImagen
  };

}

function validatorParams( bodyParams = {} ) {

  const validator = new validatorjs( bodyParams, {
    nombre: "required|string",
    apellidos: "required|string",
    email: "required|email|string",
    password: "required|string",
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

    const usuario = await Usuario.create( bodyParams );

    return res
      .status(201)
      .json({
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

    const {
      items,
      page
    } = req.query;

    const query = {
      where: { isDeleted: false }
    };

    const pagination = pager(
      await Usuario.count( query ),
      page,
      items
    );

    const usuarios = await Usuario.findAll({ where: { isDeleted: false } });

    return res
      .json( usuarios );
    
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

    const usuario = await Usuario.findByPk( id );

    return res
      .json( usuario );
    
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

    await Usuario.update( bodyParams, {
      where: { id }
    })
    
    return res
      .status(202)
      .json({
        message: "updated"
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

    const usuario = await Usuario.update( { isDeleted: true }, {
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
