const database = require('../models');

class PessoaController {
    static async criarPessoa(req, res){
        const dadosPessoa = req.body
        try{
            const create = await database.Pessoas.create(dadosPessoa)
            return res.status(201).json(create)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    static async selectTabelaPessoas(req, res){
        try {
            const select = await database.Pessoas.findAll()
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async selectPessoa(req, res){
        const {id} = req.params
        try {
            const select = await database.Pessoas.findOne( { where: {id: Number(id)} })
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async atualizarPessoa(req, res){
        const {id} = req.params
        const infosAtualizadas = req.body
        try {
            await database.Pessoas.update(infosAtualizadas, {where: { id: Number(id) }})
            const update = await database.Pessoas.findOne( {where: {id: Number(id)}})
            return res.status(200).json(update)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async deletarPessoa(req, res){
        const {id} = req.params
        try { 
            await database.Pessoas.destroy( { where: {id: Number(id)} })
            return res.status(200).send('Usuário Deletado com Sucesso!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectTabelaMatriculas (req, res){
        try{
            const select = await database.matriculas.findAll()
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectMatriculaPessoa (req, res){
        const { idMatricula, idEstudante } = req.params
        try{
            const select = await database.matriculas.findOne({ where: {id: Number(idMatricula), estudante_id: Number(idEstudante)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarMatricula (req, res){
        const {idEstudante} = req.params
        const dadosMatricula = { ...req.body, estudante_id: Number(idEstudante) }
        try{
            const criar = await database.matriculas.create(dadosMatricula)
            return res.status(201).json(criar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarMatricula (req, res){
        const { idMatricula, idEstudante } = req.params
        const novosDados = req.body
        try{    
            await database.matriculas.update(novosDados, {where: {id: Number(idMatricula), estudante_id: Number(idEstudante)}})
            const select = await database.matriculas.findOne({where: {id: Number(idMatricula)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarMatricula (req, res){
        const { idMatricula, idEstudante } = req.params
        try{
            await database.matriculas.destroy({where: {id: Number(idMatricula), estudante_id: Number(idEstudante)}})
            return res.status(200).send('Matrícula Deletada com Sucesso!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController