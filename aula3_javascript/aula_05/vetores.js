const leia = require("readline-sync")

let vetorStrings = ["Boxer", "Pastor Alemão", "Pinscher", "Husky Siberiano", "Corgi"];

//let vetorInteiros = new Array(5);

let vetorNumeros = [7, 5, 9, 1, 3, 2]

//for (let i = 0; i < vetorInteiros.length; i++) {
//  vetorInteiros[i] = leia.question("Digite a raca do cachorro: ")
//}

//console.table(vetorInteiros);

console.table(vetorStrings.sort())
console.table(vetorNumeros.sort((a, b) => a - b))