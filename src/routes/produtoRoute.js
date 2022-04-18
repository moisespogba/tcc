const express = require("express");

const routes = express.Router();
const upload = require("../config/multer");

const produtoController = require("../controller/produtoController");

//list
routes.get("/", produtoController.list);

//filtro
routes.post("/", produtoController.filtro);

//abre add
routes.get("/add", produtoController.abreadd);

//add
routes.post("/add", upload.single("foto"), produtoController.add);

//abre edit
routes.get("/edit/:id", produtoController.abreedit);

//edit
routes.post("/edit/:id", upload.single("foto"), produtoController.edit);

//del
routes.get("/del/:id", produtoController.del);

module.exports = routes;
