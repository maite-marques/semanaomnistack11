const express = require('express');
// requerendo o módulo express para este arquivo index.js

const app = express();
// armazenando a apliação na variável app

app.use(express.json());
// Vou enviar as requisições em json e estou 
// solicitando a conversão delas em javascript

app.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);


    return response.json({
        evento: "Semana Omnistack 11.0",
        aluna: "Fernanda Marques"
    });
});
// ciando a rota raiz da aplicação com a  '/''

app.listen(3333);
// variável app ouvindo a rota localhost:3333 | não existe rota

