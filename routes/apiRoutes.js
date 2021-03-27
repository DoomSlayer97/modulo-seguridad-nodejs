const { Router } = require("express");

const routes = Router();

const usuarioRouter = require("./usuarioRouter");
const perfilRouter = require("./perfilRoutes");

routes.use("/usuarios/", usuarioRouter);
routes.use("/perfiles/", perfilRouter);


module.exports = routes;

