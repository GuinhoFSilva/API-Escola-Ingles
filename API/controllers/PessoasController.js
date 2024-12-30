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
            return res.status(200).json( {mensagem: "Usuário Deletado com Sucesso!"} )
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController