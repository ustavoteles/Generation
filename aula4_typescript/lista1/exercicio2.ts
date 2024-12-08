//Escreva um programa para criar uma Collection Array do tipo number, 
//inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, 
//que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, 
//exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, 
//o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!


import readlynesync = require("readline-sync")

const numerosArray: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let procurarNumero

procurarNumero = readlynesync.questionInt("Digite o número que você deseja encontrar: ")

if (numerosArray.includes(procurarNumero) === true) {
    console.log(`O número ${procurarNumero} está localizado na posição: ${numerosArray.indexOf(procurarNumero)}`)
} else {
    console.log(`O numero ${procurarNumero} não foi encontrado.`)
}