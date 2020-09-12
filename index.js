const express = require("express");

const server = express();

/*
  Query params = ?teste=1
  Route params = /users/1
  Request body= { "name": "alexandre" }
*/

server.get("/users/:id", (request, response) => {
  // console.log("teste");
  // return response.send("Hello World");

  const nome = request.query.nome;
  const { id } = request.params;

  return response.json({ message: `Hello ${nome} ${id}` });
});

server.listen(3000);
