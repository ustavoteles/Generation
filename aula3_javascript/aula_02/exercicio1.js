const leia = require("readline-sync")


let salario = leia.questionFloat("Digite o salario: ")

let abono = leia.questionFloat("Digite o abono: ")

let novoSalario = salario + abono

console.log("O valor do novo salário é: ",
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(novoSalario))

