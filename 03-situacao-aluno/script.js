/*
  EXERCÍCIO 03 — SITUAÇÃO DO ALUNO
*/

const nomeAluno = "Aluno Exemplo";
const media = 2;

// Defina as faixas de classificação.
// Exemplo:
// Aprovado: média >= ...
// Recuperação: média >= ... e < ...
// Reprovado: média < ...

// TODO:
// Crie uma variável para armazenar a situação final.
let situacao = "";

// TODO:
// Utilize if / else if / else para classificar o aluno.
if (media >= 7) {
    situacao = "Aprovado";
} else if (media >= 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

// TODO:
// Exiba uma mensagem contendo nome, média e situação.
console.log(`Nome: ${nomeAluno} | Média: ${media} | Situação: ${situacao}`);