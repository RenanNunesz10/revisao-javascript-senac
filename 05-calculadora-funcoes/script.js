function soma(a, b) {
    return a + b
}

function subtracao(a, b) {
    return a - b
}

function multiplicacao(a, b) {
    return a * b
}

function divisao(a, b) {
    return (a / b) 
}

function calcular(a,b, operacao) {
    return operacao(a,b)
}

console.log(calcular(10, 5, soma))

//function calcular(a, b, operacao) {
// if (operacao === "somar") {
//     return soma(a, b)
// } else if (operacao === "subtrair") {
//     return subtracao(a, b)
// } else if (operacao === "multiplicar") {
//     return multiplicacao(a, b)
// } else if (operacao === "dividir") {
//     return divisao(a, b)
// } else {
//     return "Operação inválida"
// }
// }