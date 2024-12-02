
const leia = require('readline-sync')

let n1,n2

n1 = leia.questionInt("Digite o primeiro numero:")
n2 = leia.questionInt("Digite o segundo numero:")

console.log("A variável n1 possui o valor: ",n1)
console.log("A variável n2 possui o valor: ",n2)

soma = n1+n2+1

console.log("\n A soma de n1 + n2 é igual a: ",n1+n2, "soma 2",soma)
console.log("\n A subtração de n1 - n2 é igual a: ",n1-n2)
console.log("\n A multiplicação de n1 * n2 é igual a: ",n1*n2)
console.log("\n A divisão de n1 / n2 é igual a: ",n1/n2)
console.log("\n A Potenciação de n1 ^ n2 é igual a: ",Math.pow(n1,n2))
console.log("\n A Raiz quadrada de n1 ^ n2 é igual a: ",Math.sqrt(n1))


//var n1; //var=variavel global

//let n2; //com let, dentro de um laço ou 
//qualquer outra estrutura, ela vai ficar dentro da estrutura

//MAIS ACONSELHAVEL USAR O LET, PQ ELE RESPEITA O ESCOPO