const express = require("express"); //importando o express
const app = express(); //Criando o servidor usando o express
//Criando uma rota principal ( / )


app.use(express.json()); //Middleware fica entre a requisição e a resposta, ele interpreta no formato JSON

// ============
//BANCO DE DADOS FICTICIO
//==============

//Aqui estamos simulando um banco de dados.
// Em vez de usar um banco real, usamos um array.
// Cada objeto dentro do array representa um filme.


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
    genero: "Comédia"
   },
  {
    id: 7,
    titulo: "Oblivion",
    genero: "Ficção",
  },
];
//=======================================
//Estrutura:  servidor.verbo("caminho", (req, res) => {Função} )
//req entra no servidor.
//res sai do servidor
//=======================================

app.get("/", (req, res) => {
  res.send("API de Filmes");
});

//==============PORTA==================================
//Criação da porta, definir onde o servidor vai rodar.
const PORT = 3000;

//Servidor(app), escute (listen) a nossa porta(PORT). E faça tal coisa: Mostre no local host a nossa porta 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

//Criando uma rota para mostrar os filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});




//------Parametros de rotas
//o id vem da url. Tudo que vem da url vem como texto (string)

app.get( "/filmes/:id", (req, res) => {
  const idQueFoiPegoNaURL = Number (req.params.id); //essa variavel serve para guardar os ids e tbm converter a string para um valor numerico.

  const filmeEncontrado = filmes.find(
    (filmes) => filmes.id === idQueFoiPegoNaURL, //(filme) é apenas uma vaiável temporária.
     );

    //se encontrar retorne em formato JSON.
    // se ão encontrar, o resultado será undefined.

    res.json(filmeEncontrado);

});

//----Cadastrando um novo filme
//POST /filmes
//==============================
//O cliente envia dados no body (JSON).

app.post("/filmes", (req, res) => {

  const novoFilme = {

    id: filmes.length + 1, //ID é gerado com base no tamanho da array.

    titulo: req.body.titulo,
    genero: req.body.genero,
  };

  filmes.push(novoFilme); //Adiciona o novo objeto (novoFilme) no final da array
  res.send(novoFilme);

res.send (`O Filme ${novoFilme.titulo} foi cadastrado com sucesso`);

});

//==========CRIANDO ROTA DE SERIES===========================
//BANCO DE DADOS FICTICIO (SERIES)
//==========================================================

const series = [
  {
    id: 1,
    titulo: "Stranger Things",
    genero: "Ficção Cientifica",
  },
 {
    id: 2,
    titulo: "Friends",
    genero: "Comédia",
  },
   {
    id: 3,
    titulo: "O Mentalista",
    genero: "Drama",
  },
   {
    id: 4,
    titulo: "Outlander",
    genero: "Drama",
  },
   {
    id: 5,
    titulo: "Diarios de Vampiro",
    genero: "Fantasia",
  },
   {
    id: 6,
    titulo: "The Office",
    genero: "Comédia",
  },
   {
    id: 7,
    titulo: "Reign",
    genero: "Drama",
  },
  
];

//===================================
//Rota de Series
//====================================

app.get("/series", (req, res) => {
  res.send(series);
});

//===================
// ROTA POST para cadastrar uma nova série
//======================

app.post("/series", (req, res) => {

  const novaSerie = {
    id: series.length + 1,
    titulo: req.body.titulo,
    genero: req.body.genero
  }

  series.push(novaSerie);
  res.send(`A série ${novaSerie.titulo} foi cadastrada com sucesso!`)
});











//----Postman é uma ferramenta utilizada para testar requisições. Conseguimos simular o que o front faria.






//console.log(filmes)
//-------------------Gambiarra do bem , fins didáticos-------------
//app.get("/criar-filme", (req, res) => {
  //const novoFilmeTeste = {
   // id: filmes.length + 1,
    //titulo: "Faces da Morte",
    //genero: "Terror",
  //};
  //filmes.push(novoFilmeTeste);
  //res.json(novoFilmeTeste);
//});


//Verbo POST é usado para enviar dados do cliente para o servidor
//app.post("/filmes", (req, res) => {
  //Criar um novo filme (objeto)
  //const novoFilme = {
    //id: filmes.length + 1, //Gerando um ID automático baseado no tamanho da array filmes
    //titulo: "Olhos Famintos",
    //genero: "Terror",
 // };
  //filmes.push(novoFilme); //método para adicionar o filme no final da //array
  //res.json(novoFilme);
//});
