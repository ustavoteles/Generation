//Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor.
// Em seguida, mostre na tela:
//Todos os elementos dos índices ímpares do vetor 
//xTodos os elementos do vetor que são números pares
//A Soma de todos os elementos do vetor
//A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

const leia = require("readline-sync");

let vetorInt = new Array(10);
let vetorPar = new Array(5);
let vetorImpar = new Array(5);

let indexPar = 0
let indexImpar = 0
let soma = 0;


for (let i = 0; i < vetorInt.length; i++) {
    vetorInt[i] = leia.questionInt("Digite um numero: ")

    soma += vetorInt[i]

    if (vetorInt[i] % 2 === 0) {
        vetorPar[indexPar]=vetorInt[i]
        indexPar++
    } else {
        vetorImpar[indexImpar]=vetorInt[i]
        indexImpar++
    }
}

console.log(`Elementos nos indíces ímpares: ${vetorImpar}`)
console.log(`Elementos nos indíces pares: ${vetorPar}`)
console.log(`Soma: ${soma}`)
console.log(`Média: ${(soma / vetorInt.length).toFixed(2)}`)

//ver esse push