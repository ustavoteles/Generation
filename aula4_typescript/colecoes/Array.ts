import readlynesync = require("readline-sync")

const num1: Array<number> = new Array<number>();

num1.push(7);
num1.push(2);
num1.push(5);
num1.push(10);
num1.push(8, 3);

//listamos os dados que foram adicionados
for (let numero of num1) {
    console.log(num1);
}

//Adicionamos um numero utilizando a entrada de dados
num1.push(readlynesync.questionFloat("Digite um numero: "))

//adcionamos um ou mais elementos no inicio
num1.unshift(2, 4.5, 8, 9)


console.table(num1)

//verificamos se um numero existe na coleção
console.log("\nExiste o numero 5 no array", num1.includes(5));

//verificamos qual é o indice de um elemento
console.log("\nQual é indice do numero 3 no array?", num1.indexOf(3));


//removemos um numero da colecao
num1.splice(num1.indexOf(10), 1 )

console.table(num1)
