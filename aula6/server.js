const express = require("express");
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get("/", (req, res) => {
  res.send("Hello <b>world!</b>");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
