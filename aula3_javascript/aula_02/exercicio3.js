//Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, 
//as Horas Extras e os Descontos de um Colaborador e exiba na 
//tela o Salário Líquido. Veja o exemplo abaixo:

const leia = require("readline-sync")

let salarioBruto = leia.questionFloat("Digite o valor do salario bruto: ")
let adicionalNoturno = leia.questionFloat("Digite o valor do adicional noturno: ")
let horasExtras = leia.questionFloat("Digite as horas extras: ")
let descontos = leia.questionFloat("Digite o valor dos descontos: ")

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log("O valor do salário líquido é de: ",
    new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(salarioLiquido))
