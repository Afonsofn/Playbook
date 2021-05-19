// Fazendo um sort() num array de Objetos.

const ArrayDeObj = [
  {
    nome: "Raul",
    idade: 21
  },
  {
    nome: "Afonso",
    idade: 22
  },
  {
    nome: "Ferreira",
    idade: 23
  },
  {
    nome: "Neto",
    idade: 24
  }
]

//  O método sort aceita como parâmetro opcional, uma função com dois parâmetros,
//  dois objetos a serem comparados pelo algoritmo de ordenação.
//  Essa função deve retornar um número negativo se o primeiro objeto é menor que o segundo,
//  um número positivo se o segundo é menor que o primeiro, e zero se ambos são iguais.

ArrayDeObj.sort( function (a, b) {
  return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
});