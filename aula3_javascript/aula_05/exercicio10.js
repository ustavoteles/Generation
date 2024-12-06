//Elabore um algoritmo que leia as notas de uma turma com 10 participantes, dos 4 bimestres de um ano.
// As 4 notas de cada participante serão armazenadas em uma linha de uma matriz de números reais, logo 
//cada linha da matriz representará as notas de um participante. Em um vetor de números reais, armazene as
// médias de cada participante e exiba as médias de cada um na tela.

const leia = require("readline-sync")

let matrizNotas = new Array(2)
let vetorMedia = [];

for (let i = 0; i < matrizNotas.length; i++) {
    matrizNotas[i] = Array(5);

}

for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizNotas[indiceLinha].length; indiceColuna++) {
        matrizNotas[indiceLinha][indiceColuna] = leia.questionFloat("Digite as notas")
        console.table(matrizNotas)
        vetorMedia[indiceLinha]+=matrizNotas[indiceColuna]
    }

}
console.table(vetorMedia)
//for (let i = 0; i < matrizNotas.length; i++) {
  //  vetorMedia = 0
//}
console.table(matrizNotas.length)
