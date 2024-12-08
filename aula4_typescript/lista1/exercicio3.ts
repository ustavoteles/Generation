//Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite
// via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. 
//Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 


import readlynesync = require("readline-sync")

const listarNumeros: Set<number> = new Set<number>();
let mostrarNumeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    listarNumeros.add(readlynesync.questionInt("Digite um numero: "));
}


for (let i = 0; i < 10; i++) {
    if (listarNumeros.has(i) === false) {
        listarNumeros.delete(i)
    }
}


let ordernarSetListarNumeros: Array<number> = Array.from(listarNumeros);

console.log("Listar dados do set")

//usar essa arrow function pra fazer bubble sort, pois no unicode, 10 vem antes do 2
for (let numeros of ordernarSetListarNumeros.sort((a, b) => a - b)) {
    console.log(numeros)
}
