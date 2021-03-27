const { Router } = require("express");
const pdfGenerator = require("../utils/pdf");
const pdfEditor = require("../utils/pdfEditor");


const routes = Router();

routes.get("/basic", async ( req, res ) => {

  const content = pdfEditor.generateHtml();

  console.log(content);

  const file = await pdfGenerator.generarPdf( content );

  return res.send("<h1>Pdf file generated! :D</h1>")

});


module.exports = routes;