const express = require("express"); //importando o express
const app = express(); //Criando o servidor usando o express
//Criando uma rota principal ( / )
//Estrutura:  servidor.verbo("caminho", (req, res) => {Função} )
//req entra no servidor.
//res sai do servidor
app.get("/", (req, res) => {
  res.send("API de Filmes");
});
//Criação da porta, definir onde o servidor vai rodar.
const PORT = 3000;
//Servidor(app), escute (listen) a nossa porta(PORT). E faça tal coisa: Mostre no local host a nossa porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
// Criando um mini banco de dados, array de objetos [{},{},{}] - formato JSON
const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção",
  },
  {
    id: 2,
    titulo: "velozes e furiosos 5",
    genero: "ação",
  },
  {
    id: 3,
    titulo: "As branquelas",
    genero: "Comédia",
  },
  {
    id: 4,
    titulo: "O Poderoso Chefão ",
    genero: "Drama",
  },
  {
    id: 5,
    titulo: "Missão Impossivel ",
    genero: "Ação",
  },
  { id: 6, 
    titulo: "Até que a sorte nos separe", 
    genero: "Comédia" },
  {
    id: 7,
    titulo: "Oblivion",
    genero: "Ficção",
  },
];
//Criando uma rota para mostrar os filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});

//Verbo POST é usado para enviar dados do cliente para o servidor
app.post("/filmes", (req, res) => {
  //Criar um novo filme (objeto)
  const novoFilme = {
    id: filmes.length + 1, //Gerando um ID automático baseado no tamanho da array filmes
    titulo: "Olhos Famintos",
    genero: "Terror",
  };
  filmes.push(novoFilme); //método para adicionar o filme no final da array
  res.json(novoFilme);
});

//console.log(filmes)
//-------------------Gambiarra do bem , fins didáticos-------------
app.get("/criar-filme", (req, res) => {
  const novoFilmeTeste = {
    id: filmes.length + 1,
    titulo: "Faces da Morte",
    genero: "Terror",
  };
  filmes.push(novoFilmeTeste);
  res.json(novoFilmeTeste);
});

