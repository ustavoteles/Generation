//Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros
// e em seguida, mostre na tela:
//Todos os elementos da Diagonal Principal
//Todos os elementos da Diagonal Secundária
//A Soma de todos os elementos da Diagonal Principal
//A Soma de todos os elementos da Diagonal Secundária
//Veja o exemplo abaixo:


const leia = require("readline-sync");

let matrizInteiros = new Array(3)
let vetorDiagonalPrincipal = []
let vetorDiagonalSecundario = []
let diagonalPrincipal = 0
let somaDiagonalSecundaria = 0
let somaDiagonalPrincipal=0

for (let i = 0; i < matrizInteiros.length; i++) {
    matrizInteiros[i] = Array(3)
}

for (let indiceLinha = 0; indiceLinha < matrizInteiros.length; indiceLinha++) {
    for (let indiceColuna = 0; indiceColuna < matrizInteiros.length; indiceColuna++) {
        matrizInteiros[indiceLinha][indiceColuna] = leia.questionInt("Digite um numero: ")
    }
}
console.table(matrizInteiros)

for (let i = 0; i < matrizInteiros.length; i++) {
    vetorDiagonalPrincipal[i] = matrizInteiros[i][diagonalPrincipal]
    diagonalPrincipal++
    somaDiagonalPrincipal+=vetorDiagonalPrincipal[i]
}

let diagonalSecundaria = matrizInteiros.length
console.log(diagonalSecundaria)
for (let i = 0; i < matrizInteiros.length; i++) {
    vetorDiagonalSecundario[i] = matrizInteiros[i][diagonalSecundaria-1]
    diagonalSecundaria--
    somaDiagonalSecundaria+= vetorDiagonalSecundario[i]

}

console.log(`Elementos da Diagonal Principal ${vetorDiagonalPrincipal}`)
console.log(`Elementos da Diagonal Principal ${vetorDiagonalSecundario}`)
console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonalPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Principal: ${somaDiagonalSecundaria}`)
