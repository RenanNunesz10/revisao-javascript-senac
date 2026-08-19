/*
  EXERCÍCIO 08 — CATÁLOGO DE PRODUTOS
*/

// TODO:
// Crie um array chamado produtos com pelo menos 5 objetos.
//
// Cada produto deve possuir:
// id
// nome
// preco
// categoria
// emEstoque

const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500.00,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 2,
    nome: "Cadeira Gamer",
    preco: 850.50,
    categoria: "Móveis",
    emEstoque: false
  },
  {
    id: 3,
    nome: "Teclado Mecânico",
    preco: 250.00,
    categoria: "Eletrônicos",
    emEstoque: true
  },
  {
    id: 4,
    nome: "Garrafa Térmica",
    preco: 89.90,
    categoria: "Acessórios",
    emEstoque: true
  },
  {
    id: 5,
    nome: "Mousepad Gigante",
    preco: 45.00,
    categoria: "Acessórios",
    emEstoque: false
  }
];

// TODO:
// Percorra o array com for, for...of ou forEach().

//in - acessa os índices do array
//for (prod in produtos){
//  console.log(prod)
//}


//in - acessa os valores do array
//for (prod of produtos){
//  console.log(prod)
//}

//for each - para cada elemento
//function showProducts(prod){
//  console.log(prod)
//}

//produtos.forEach(showProducts);


// TODO:
// Para cada item, mostre no console uma frase formatada
// contendo as informações do produto.

function produtosFormatados(prod){
  console.log(`Nome: ${prod.nome} \n Preço: R$ ${prod.preco} \n Categoria: ${prod.categoria} \n Em Estoque? ${prod.emEstoque ? "Sim" : "Não"}`)
}

produtos.forEach(produtosFormatados);