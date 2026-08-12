function classificarNumero(numero) {
    if (numero === 0) {
        return "Este número é zero";
    }
    
    const sinal = numero > 0 ? "Positivo" : "Negativo";
    const tipo = numero % 2 === 0 ? "Par" : "Ímpar";

    return `O número ${numero} é ${sinal} e ${tipo}.`;
}

console.log(classificarNumero(-5));