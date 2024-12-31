const database = require('../models');

class NiveisController {

    static async criarNivel (req, res){
        const dadosNivel = req.body
        try{
            const criar = await database.niveis.create(dadosNivel)
            return res.status(201).json(criar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectTabelaNiveis (req, res){
        try{
            const select = await database.niveis.findAll()
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectNivel (req, res){
        const {id} = req.params
        try{
            const select = await database.niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarNivel (req, res){
        const {id} = req.params
        const novosDados = req.body
        try{
            await database.niveis.update(novosDados, {where: {id: Number(id)}})
            const select = await database.niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarNivel (req, res){
        const {id} = req.params
        try{
            await database.niveis.destroy({where: {id: Number(id)}})
            return res.status(200).send('Nível deletado com sucesso!')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NiveisController