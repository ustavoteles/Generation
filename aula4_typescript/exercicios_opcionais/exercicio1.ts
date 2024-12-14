//Elabore um algoritmo para calcular a área de um círculo. 
// O algoritmo deverásolicitar ao usuário, via teclado, a
// entrada de um número do tipo float, que representará 
// o raio do círculo. Em seguida, o programa calculará e
// exibirá a área do círculo. Veja os exemplos abaixo

import readlinesync = require("readline-sync");

let area, raioCirculo: number;

raioCirculo = readlinesync.questionFloat("Digite o valor do raio: ");


area = Math.PI * (Math.pow(raioCirculo, 2))

console.log("A area do círculo é: ", area.toFixed(2));