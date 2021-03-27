const { Router } = require("express");
const routes = Router();

const perfilController = require("../controllers/perfilController");

routes.post("/", perfilController.create);
routes.get("/", perfilController.findAll);
routes.get("/:id", perfilController.findOne);
routes.put("/:id", perfilController.update);
routes.delete("/:id", perfilController.deleteOne);

module.exports = routes;
