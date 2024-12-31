const { Router } = require("express");
const PessoaController = require('../controllers/pessoasController')

const router = Router()

router.post('/pessoas', PessoaController.criarPessoa)
router.get('/pessoas', PessoaController.selectTabelaPessoas)
router.get('/pessoas/:id', PessoaController.selectPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.deletarPessoa)
router.get('/matricula/', PessoaController.selectTabelaMatriculas)
router.get('/pessoas/:idEstudante/matricula/:idMatricula', PessoaController.selectMatriculaPessoa)
router.post('/pessoas/:idEstudante/matricula/', PessoaController.criarMatricula)
router.put('/pessoas/:idEstudante/matricula/:idMatricula', PessoaController.atualizarMatricula)
router.delete('/pessoas/:idEstudante/matricula/:idMatricula', PessoaController.deletarMatricula)
module.exports = router