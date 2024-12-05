const leia = require("readline-sync")

let nome = leia.question("Qual o seu nome: ")
let idade = leia.questionInt("Qual a sua idade: ")

let valor


if (idade >= 0) {
    if (idade >= 0 && idade <= 10) {
        valor = 100.00
    } else if (idade >= 11 && idade <= 29) {
        valor = 200.00
    } else if (idade >= 30 && idade <= 45) {
        valor = 300.00
    } else if (idade >= 46 && idade <= 59) {
        valor = 500.00
    } else if (idade >= 60 && idade <= 65) {
        valor = 600.00
    } else {
        valor = 1000.00
    }
}
else {
    console.log("Idade Inválida")
    process.exit(0)
}
console.log(`O valor do Plano de saúde do(a) ${nome} é ${new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(valor)}`)