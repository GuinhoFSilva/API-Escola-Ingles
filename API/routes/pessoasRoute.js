const { Router } = require("express");
const PessoaController = require('../controllers/pessoasController')

const router = Router()

router.post('/pessoas', PessoaController.criarPessoa)
router.get('/pessoas', PessoaController.selectTabelaPessoas)
router.get('/pessoas/:id', PessoaController.selectPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)

module.exports = router