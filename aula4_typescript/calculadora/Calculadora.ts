import readlynesync = require("readline-sync")

let numero1: number;
let numero2: number;

numero1 = readlynesync.questionFloat("Digite o primeiro numero: ");

numero2 = readlynesync.questionFloat("Digite o segundo numero: ");

console.log("A soma dos dois números é igual a: ",numero1 + numero2)
console.log("A subtração dos dois números é igual a: ",numero1 - numero2)
console.log("A multiplicação dos dois números é igual a: ",numero1 * numero2)
console.log("A divisão dos dois números é igual a: ",numero1 / numero2)

