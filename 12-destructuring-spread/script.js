/*
  EXERCÍCIO 12 — DESTRUCTURING E SPREAD
*/

const aluno = {
  nome: "Marina",
  idade: 22,
  curso: "Desenvolvimento Web",
  notas: [8.5, 7.0, 9.0],
  situacao: "Em análise",
};

// TODO:
// Extraia nome, curso e notas utilizando destructuring.

const { nome, curso, notas } = aluno;

// TODO:
// Calcule a média das notas.
console.log(notas)

const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

console.log(media)

// TODO:
// Crie um NOVO objeto chamado alunoAtualizado usando spread.

// alunoAtualizado deve:
// - manter os dados anteriores;
// - adicionar a propriedade media;
// - alterar a situacao.

const alunoAtualizado = {
  ...aluno,
  media: media,
  situacao: media >= 6 ? "Aprovado" : "Reprovado"
}

// IMPORTANTE:
// Não modifique o objeto aluno diretamente.

// TODO:
// Exiba os dois objetos para comparação.

console.log (JSON.stringify(aluno, null, 2))

console.log (JSON.stringify(alunoAtualizado, null, 2))