const { Router } = require('express');
const routes = Router();

const departamentoController = require('../controllers/departamentoController');

routes.post('/', departamentoController.create);
routes.get('/', departamentoController.findAll);
routes.get('/:id', departamentoController.findOne);
routes.put('/:id', departamentoController.update);
routes.delete('/:id', departamentoController.deleteOne);


module.exports = routes;