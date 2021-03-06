require("dotenv").config();

const express = require("express");
const { json, urlencoded } = require("express");

const app = express();

app.use( json() );
app.use( urlencoded({ extended: true }) );

app.set('views', '../views');
app.set('view engine', 'pug');

app.set("port", process.env.PORT || 3000);

module.exports = app;
