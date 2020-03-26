const express = require('express');
// requerendo o módulo express para este arquivo index.js

const app = express();
// armazenando a apliação na variável app

app.get('/', (request, response) => {
    return response.json({
        evento: "Semana Omnistack 11.0",
        aluna: "Maitê Marques Caetano"
    });
});
// ciando a rota raiz da aplicação com a '/''
// passando uma função que recebe como parâmetros a 
// requisição (request) e a resposta (response)

app.listen(3333);
// variável app ouvindo a rota localhost:3333 | não existe rota

