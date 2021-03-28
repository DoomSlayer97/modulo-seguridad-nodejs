const { Router } = require("express");

const routes = Router();

const uploadController = require('../controllers/uploadController');

routes.post('/file', uploadController.uploadFile);

module.exports = routes;