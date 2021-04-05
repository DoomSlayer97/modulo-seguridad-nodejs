const { Router } = require("express");

const routes = Router();

const usuarioRouter = require("./usuarioRouter");
const perfilRouter = require("./perfilRoutes");
const uploadRouter = require("./uploadRoutes");
const departamentoRouter = require("./departamentoRoutes");

routes.use("/usuarios/", usuarioRouter);
routes.use("/perfiles/", perfilRouter);
routes.use("/upload/", uploadRouter);
routes.use("/departamentos/", departamentoRouter);


module.exports = routes;

