let nome = "Gustavo"
let profissao = "Pessoa Desenvolvedora"
let salarioBruto = 3500.44

const bonus = 0.05



console.log("\n Nome: ", nome)
console.log("\n Profissão: ", profissao)

console.log('Salário Líquido: ',
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
);
console.log('O salário do colaborador ', nome, ' é ' + salarioBruto);

//Interpolação de Strings
console.log(`O salário do colaborador ${nome} é ${salarioBruto}`);

/*console.log("\nTipo da variável: ",typeof nome)

nome = 12

console.log("\n Nome: ",nome)

console.log("\n Tipo da variável: ", typeof nome)*/
