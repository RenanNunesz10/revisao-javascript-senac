/*
  EXERCÍCIO 06 — ARROW FUNCTIONS
*/

// TODO:
// Reescreva as funções abaixo utilizando arrow functions.

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
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
  if (operacao === "somar") {
    return somar(a, b);
  }
  if (operacao === "subtrair") {
    return subtrair(a, b);
  }
  if (operacao === "multiplicar") {
    return multiplicar(a, b);
  }
  if (operacao === "dividir") {
    return dividir(a, b);
  }
  return "Operação inválida";
}
