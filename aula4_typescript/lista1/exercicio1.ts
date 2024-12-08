//Escreva um programa para criar uma Collection Array de Objetos do tipo string.
// O programa deverá solicitar ao usuário, que ele digite via teclado 5 cores e deverá 
//adicioná-las individualmente no Array. Em seguida, faça o que se pede:
//Mostre na tela todas as cores adicionadas. 
//Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.

//Azul, Verde, Amarelo , Branco ,Laranja


import readlynesync = require("readline-sync")

const listarCores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    listarCores[i]=readlynesync.question("Digite uma cor: ")
}

console.log("\nAs cores inseridas foram: ");

for(let cor of listarCores){
    console.log(cor)
}

console.log("\n Ordenadas em ordem alfabética: ")
for(let cor of listarCores.sort()){
    console.log(cor)
}

