const database = require('../models');

class TurmasController {

    static async criarTurma (req, res){
        const dadosTurma = req.body
        try{
            const criar = await database.turmas.create(dadosTurma)
            return res.status(201).json(criar)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async selectTabelaTurmas (req, res){
    try{
        const select = await database.turmas.findAll()
        return res.status(200).json(select)
    } catch (error) {
        return res.status(500).json(error.message)
    }
    }

    static async selectTurma (req, res){
        const {id} = req.params
        try{
            const select = await database.turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizarTurma (req, res){
        const {id} = req.params 
        const novosDados = req.body
        try{
            await database.turmas.update(novosDados, {where: {id: Number(id)}})
            const select = await database.turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deletarTurma (req, res){
        const {id} = req.params
        try{
            await database.turmas.destroy({where: {id: Number(id)}})
            return res.status(200).send('Turma deletada com sucesso')
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = TurmasController