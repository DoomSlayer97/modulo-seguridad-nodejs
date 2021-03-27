const { Router } = require("express");
const routes = Router();

const usuarioController = require("../controllers/usuarioController");

routes.post("/", usuarioController.create);
routes.get("/", usuarioController.findAll);
routes.get("/:id", usuarioController.findOne);
routes.put("/:id", usuarioController.update);
routes.delete("/:id", usuarioController.deleteOne);


module.exports = routes;
