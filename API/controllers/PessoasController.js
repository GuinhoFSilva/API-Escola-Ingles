const database = require('../models');

class PessoaController {
    static async selectTabelaPessoas(req, res){
        try {
            const select = await database.Pessoas.findAll()
            return res.status(200).json(select)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController