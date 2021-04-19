const app = require("./config/app");
const apiRoutes = require("./routes/apiRoutes");
const documentRoutes = require("./routes/documentRoutes");

function mainApp() {

  app.use( "/api/", apiRoutes );
  app.use( "/documents/", documentRoutes );
  

  app.listen( app.get("port"), console.log(`Server on port ${ app.get("port") }`));

}

mainApp();


