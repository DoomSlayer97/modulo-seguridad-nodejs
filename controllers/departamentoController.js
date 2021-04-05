const { Departamento } = require('../models');
const validatorjs = require("validatorjs");
const pager = require("../utils/pager");
const { Op } = require('sequelize');

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

function getQuery( params = {} ) {

  let query = {
    isDeleted: false,
    nombre: {
      [ Op.like ]: `%${params.searchText}%`
    }
  };

  return query;

}

exports.create = async ( req, res ) => {
  try {
    
    const bodyParams = getBodyParams( req );
    const validator = validatorParams( bodyParams );

    if ( validator.fails() ) return res
      .status(400)
      .json({
        message: 'invalid_params',
        errors: validator.errors.errors
      });
    
    const departamento = await Departamento.create( bodyParams );

    return res
      .status(201)
      .json({
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

    const {
      items,
      page,
      searchText
    } = req.query;

    const query = getQuery( req.query );

    const pagination = pager(
      await Departamento.count({ where: query }),
      page,
      items
    );

    const departamentos = await Departamento.findAll({ 
      where: query,
      limit: pagination.pageSize,
      offset: pagination.offset
    });

    console.log( pagination );

    return res
      .json({
        items: departamentos,
        pager: pagination
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
    
    const departamento = await Departamento.update( { isDeleted: true }, {
      where: { id }
    });

    return res
      .status(204)
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

