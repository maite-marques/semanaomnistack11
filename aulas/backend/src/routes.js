const express = require('express');
const routes = express.Router();

routes.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: "Semana Omnistack 11.0",
        aluna: "Fernanda Marques"
    });
});
// ciando a rota raiz da aplicação com a  '/''

module.exports = routes;