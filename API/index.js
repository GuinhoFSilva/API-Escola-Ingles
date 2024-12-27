const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const porta = 3000

app.listen(porta, () => console.log(`Servidor está rodando na porta ${porta}`))

app.use(bodyParser.json())

app.get('/teste', (req, res) => {
  res.status(200).send('API funcionando')
})

module.exports = app