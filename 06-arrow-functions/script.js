/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por zero";
  }

  return a / b;
}

// TODO:
// Identifique quais funções podem utilizar retorno implícito.

// TODO:
// Crie uma arrow function calcular() mantendo o comportamento do exercício anterior.
const calcular = (a, b, operacao) => {
  switch (operacao) {
    case "somar":
      return somar(a, b);
    case "subtrair":
      return subtrair(a, b);
    case "multiplicar":
      return multiplicar(a, b);
    case "dividir":
      return dividir(a, b);
    default:
      return "Operação inválida";
  }
}
