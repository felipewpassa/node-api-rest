const express = require("express");
const routes = express.Router();
const HelloController = require("./controllers/http/HelloControllers");

routes.get("/", HelloController.index);

module.exports = routes;
