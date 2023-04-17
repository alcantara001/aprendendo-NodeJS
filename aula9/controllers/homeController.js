exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</buton>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua rota de posts");
};
