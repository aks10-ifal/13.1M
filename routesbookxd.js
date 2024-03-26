
const express = require('express');
const router = express.Router();
const livrosController = require('./functions/functionsbooks');

router.get('/', livrosController.getIndex);
router.get('/buscar', livrosController.buscarLivros);
router.get('/buscar/ano/:ano', livrosController.buscarPorAno);
router.get('/livros/buscar', livrosController.buscarLivros);

module.exports = router;
