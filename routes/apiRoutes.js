const { Router } = require("express");

const routes = Router();

const usuarioRouter = require("./usuarioRouter");
const perfilRouter = require("./perfilRoutes");
const uploadRouter = require("./uploadRoutes");

routes.use("/usuarios/", usuarioRouter);
routes.use("/perfiles/", perfilRouter);
routes.use("/upload/", uploadRouter);


module.exports = routes;

