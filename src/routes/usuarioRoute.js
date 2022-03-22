const express = require('express')

const routes = express.Router()

const upload = require("../config/multer")

const usuarioController = require('../controller/usuarioController')

//list
routes.get('/',usuarioController.list)

//filtro
routes.post('/',usuarioController.filtro)

//abre add
routes.get('/add',usuarioController.abreadd)

//add
routes.post('/add',upload.single('foto'),usuarioController.add) //upload.Single('foto')

//abre edit
routes.get('/edit/:id',usuarioController.abreedit)

//edit
routes.post('/edit/:id',upload.single('foto'),usuarioController.edit) //upload.Single('foto'),

//del
routes.get('/del/:id',usuarioController.del)

module.exports = routes;