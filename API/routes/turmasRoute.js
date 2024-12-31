const { Router } = require("express");
const TurmasController = require('../controllers/turmasController')

const router = Router()

router.post('/turmas', TurmasController.criarTurma)
router.get('/turmas', TurmasController.selectTabelaTurmas)
router.get('/turmas/:id', TurmasController.selectTurma)
router.put('/turmas/:id', TurmasController.atualizarTurma)
router.delete('/turmas/:id', TurmasController.deletarTurma)

module.exports = router