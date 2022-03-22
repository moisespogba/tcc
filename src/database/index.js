const Sequelize = require('sequelize')
const config = require("../config/database")
const Produto = require('../model/Produto')
const Usuario = require('../model/Usuario')

const conexao = new Sequelize(config);

Produto.init(conexao);
Usuario.init(conexao);

module.exports = conexao;