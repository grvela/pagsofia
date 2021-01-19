const express = require('express');
const pagarme = require('pagarme');

require('dotenv').config();

const app = express();

//TRATAR DADOS PADRÃO NOS POST 

app.post('/pagarme', (request, response) => {
    const data = request.body;
    try { 
        pagarme.client.connect({ api_key : process.env.API_TOKEN })
        .then(client => client.transactions.create(data))
        .then(transaction => { return response.json(transaction) })
    } catch (error) {
        return response.json(error)
    }
   
});


module.exports = app;