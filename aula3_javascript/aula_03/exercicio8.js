//Desenvolva um algoritmo que simule as
//operações básicas de uma Conta Bancária.
//O programa deverá ler o tipo da operação
//a ser realizada com base na tabela abaixo
//(número inteiro entre 1 e 3) e o valor a ser
//depositado ou sacado (somente nas opções 2 e 3).
//Considere que um saque só pode ser realizado caso haja 
//saldo suficiente. Ao final de cada operação, exiba o 
//novo Saldo na tela. A variável saldo (número real), será 
//inicializada com o valor de R$ 1000.00. Caso o 
//número da operação esteja fora do intervalo entre 
//1 e 4, mostre a mensagem na tela Operação Inválida!

const leia = require("readline-sync")

console.log("|======CONTA BÁNCARIA======|")
console.log("|  1 -       Saldo         |")
console.log("|  2 -       Saque         |")
console.log("|  3 -       Depósito      |")
console.log("|==========================|")

let saldoAtual = 1000.00
let saldoTotal
let codigo = leia.questionInt("Qual operacao voce deseja efetuar: ")

switch (codigo) {
    case 1:
        console.log("OPERAÇÃO - SALDO")
        console.log("VOCÊ SELECIONOU SALDO:")
        console.log(`SALDO ATUAL : ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(saldoAtual)}`)
        break
    case 2:
        console.log("VOCÊ SELECIONOU SAQUE:")
        console.log("OPERAÇÃO - SAQUE")
        let valorSaque = leia.questionFloat("Digite o valor que voce deseja sacar: ")
        if (saldoAtual > valorSaque) {
            saldoTotal = saldoAtual - valorSaque
            console.log(`VOCÊ ACABOU DE SACAR ${new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(valorSaque)}`)
            console.log(`SALDO ATUAL: ${new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
            }).format(saldoTotal)}`)
        } else if (saldoAtual<valorSaque){
            console.log("SALDO INSUFICIENTE")
        }
            break
    case 3:
        console.log("VOCÊ SELECIONOU DEPÓSITO:")
        console.log("OPERAÇÃO - DEPÓSITO")
        let valorDeposito = leia.questionFloat("Digite o valor que voce deseja depositar: ")
        saldoTotal = saldoAtual + valorDeposito
        console.log(`SALDO ATUAL: ${new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(saldoTotal)}`) 
        break
    default:
        console.log("Operação Inválida")
        break
}
