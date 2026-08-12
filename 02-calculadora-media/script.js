const nome = "Renan"
let nota1 = 8
let nota2 = 7
let nota3 = 9
let nota4 = 6

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7) {
    status = "Aprovado"
} else {
    status = "Reprovado"
}

console.log(
    `- Nome: ${nome} \n
    - nota1: ${nota1} \n
    - nota2: ${nota2} \n
    - nota3: ${nota3} \n
    - nota4: ${nota4} \n
    - Média: ${media}`)