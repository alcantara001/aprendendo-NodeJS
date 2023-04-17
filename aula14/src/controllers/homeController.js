const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Teste do titulo",
  descricao: "Teste da descricao",
})
  .then((dados) => console.log(dados))
  .catch((e) => console.log(e));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
