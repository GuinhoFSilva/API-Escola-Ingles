const { Router } = require("express");
const NiveisController = require('../controllers/niveisController')

const router = Router()

router.post('/niveis', NiveisController.criarNivel)
router.get('/niveis', NiveisController.selectTabelaNiveis)
router.get('/niveis/:id', NiveisController.selectNivel)
router.put('/niveis/:id', NiveisController.atualizarNivel)
router.delete('/niveis/:id', NiveisController.deletarNivel)

module.exports = router