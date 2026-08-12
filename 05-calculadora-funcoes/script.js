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

console.log(calcular(10, 5, divisao))