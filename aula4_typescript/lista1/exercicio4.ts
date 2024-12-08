//Escreva um programa para criar uma Collection Set do tipo number, inicializada com 10 valores inteiros. 
//O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado
// na Colection Set, exiba na tela a mensagem: O Número NN foi encontrado! Caso o número não seja encontrado, o programa
// deverá exibir na tela a mensagem: O número NN não foi encontrado!

import readlinesync = require("readline-sync")

const listarNumeros: Set<number> = new Set<number>();


for (let i = 0; i < 10; i++) {
    listarNumeros.add(readlinesync.questionInt("Digite um numero: "))
}



console.log("Os valores digitados: ")
for (let numeros of listarNumeros) {
    console.log(numeros)
}

let procurarNumero = readlinesync.questionInt("Digite o número que você deseja encontrar: ")

if (listarNumeros.has(procurarNumero)===true) {
    console.log(`O número ${procurarNumero} foi encontrado!`)
} else {
    console.log(`O número ${procurarNumero} não foi encontradoS`)
}
