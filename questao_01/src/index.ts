import promptSync from 'prompt-sync';
import {Aluno} from "./aluno";

const prompt = promptSync();

const nomeAluno = prompt("Digite o nome do aluno: ");
const matriculaAluno = Number(prompt("Digite a matricula do aluno: "));

const aluno : Aluno  = new Aluno(nomeAluno, matriculaAluno);

const notaProva1 = Number(prompt("Digite a nota da prova 1: "));
const notaProva2 = Number(prompt("Digite a nota da prova 2: "));
const notaTrabalho = Number(prompt("Digite a nota do trabalho: "));

aluno.setNotaProva1(notaProva1);

aluno.setNotaProva2(notaProva2);

aluno.setNotaTrabalho(notaTrabalho);

aluno.getNome();

console.log(`Media do aluno é ${aluno.calcularMedia()}!`);
aluno.statusAprovacao();
console.log(aluno.quantoFaltaParaAprovacao());