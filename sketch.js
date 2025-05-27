// sketch.js
let filmes = [
  { nome: "A viagem de Chihiro", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "Paddington", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "As aventuras de Pi", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "Guardiões da Galáxia", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "Ladrões de Bicicleta", idade: 12, categorias: ["drama"] },
  { nome: "O menino que descobriu o vento", idade: 14, categorias: ["drama"] }
];
let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let filmesRecomendados = [];
let campoIdade;
let campoFantasia;
let recomendacaoTexto = "Nenhum filme recomendado";

function setup() {
  createCanvas(800, 400);

  // Texto para informar ao usuário
  createSpan("Sua idade: ");
  campoIdade = createInput("5");

  // Checkbox com descrição clara
  campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function geraRecomendacao(idade, gostaDeFantasia) {
  idade = parseInt(idade); // Garante que a idade seja um número inteiro

  if (idade >= 10) {
    if (idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if (gostaDeFantasia) {
        return "As aventuras de Pi";
      } else {
        const filmeDrama12 = filmes.find(filme => filme.idade <= idade && filme.categorias.includes("drama"));
        return filmeDrama12 ? filmeDrama12.nome : "Nenhum filme recomendado";
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de Chihiro";
    } else {
      const filmeAventura0 = filmes.find(filme => filme.idade <= idade && filme.categorias.includes("aventura"));
      return filmeAventura0 ? filmeAventura0.nome : "Paddington";
    }
  }
}

function draw() {
  background("lightblue"); // Fundo azul claro
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  recomendacaoTexto = geraRecomendacao(idade, gostaDeFantasia);

  fill(color(76, 0, 115)); // Cor do texto (roxo escuro)
  textAlign(CENTER, CENTER); // Alinhamento centralizado
  textSize(38); // Tamanho maior para boa leitura

  text(recomendacaoTexto, width / 2, height / 2); // Texto exibido no centro
}
