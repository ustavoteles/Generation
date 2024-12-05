//Com base na tabela abaixo, escreva um algoritmo 
//que leia o Nome do Colaborador (string), o Código do 
//Cargo do Colaborador (número inteiro entre 1 e 6) e o
// Salário (número real). A seguir, mostre na tela o Nome 
//do Colaborador, o Cargo e o novo Salário reajustado.

const leia = require("readline-sync")

let codigo
let nomeColaborador
let cargo
let salarioAtual
let novoSalario


console.log("Código do Cargo===========Cargo===========Percentual do Reajuste")
console.log("     1 -                Gerente                    10%          ")
console.log("     2 -                Vendedor                   7%           ")
console.log("     3 -                Supervisor                 9%           ")
console.log("     4 -                Motorista                  6%           ")
console.log("     5 -                Estoquista                 5%           ")
console.log("     6 -                Técnico de TI              8%           ")
console.log("================================================================")

nomeColaborador = leia.question("Digite o nome do colaborador: ")
codigo = leia.questionInt("Digite o codigo do seu cargo: ")
salarioAtual = leia.questionFloat("Digite o valor do salario atual: ")

switch (codigo) {
    case 1:
        cargo = "Gerente"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.10 * salarioAtual)
        break
    case 2:
        cargo = "Vendedor"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.07 * salarioAtual)
        break
    case 3:
        cargo = "Supervisor"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.09 * salarioAtual)
        break
    case 4:
        cargo = "Motorista"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.06 * salarioAtual)
        break
    case 5:
        cargo = "Estoquista"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.05 * salarioAtual)
        break
    case 6:
        cargo = "Técnico de TI"
        console.log(`Você selecionou [${cargo}]`)
        novoSalario = salarioAtual + (0.08 * salarioAtual)
        break
    default:
        console.log("Opção Inválida")
        break
}

console.log("===========RESULTADO===========")
console.log(`${nomeColaborador} - [CARGO: ${cargo}]`)
console.log(`Novo salário reajustado: ${new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL",
}).format(novoSalario)}`)
