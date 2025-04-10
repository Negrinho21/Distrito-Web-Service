const express = require('express');
const app = express();
const port = 3000;

// Importar o modelo de distrito
const distrito = require('./models/distrito');

// Conexão com o banco de dados
const sequelize = require('./config/db');

sequelize.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

// Endpoint para listar todos os distritos
app.get('/api/distritos', async(req, res)=> {
    try {
        const distritos = await distrito.findAll();
        res.json(distritos);
    }catch(error){
        res.status(500).send({message:'Erro ao buscar distritos'});
    }
});

// Endpoint para mostrar um distrito específico
app.get('/api/distritos/:id', async (req, res) => {
    try{
        const distrit = await distrito.findByPk(req.params.id);
        if(distrit){
            res.json(distrit);
        }else{
            res.status(404).send({message:'Distrito não encontrado'});
        }
    } catch(error){
        res.status(500).send({message:'Erro ao buscar distrito'});
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
// Exportar o app para testes
module.exports = app;