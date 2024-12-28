const { Router } = require("express");
const PessoaController = require('../controllers/PessoasController')

const router = Router()

router.get('/pessoas', PessoaController.selectTabelaPessoas)

module.exports = router