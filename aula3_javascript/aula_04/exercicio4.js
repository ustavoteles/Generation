/*Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento 
e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes 
informações de cada colaborador:

* Idade (Número inteiro)
* Identidade de Gênero (Número Inteiro): 
1 – Mulher Cis
2 – Homem Cis
3 – Não Binário
4 – Mulher Trans
5 – Homem Trans
6 – Outros
*Pessoa Desenvolvedora (Número Inteiro):
1 – Backend
2 – Frontend
3 – Mobile
4 – FullStack
Após digitar o Tipo de Pessoa Desenvolvedora, o sistema deverá perguntar ao usuário se ele deseja
continuar a leitura dos dados de um novo colaborador ou não (S/N). Caso seja pressionada a tecla N, mostre na tela:

O número de pessoas desenvolvedoras Backend
O número de Mulheres Cis e Trans desenvolvedoras Frontend
O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
O número de Não Binários desenvolvedores FullStack menores de 30 anos
O número total de pessoas que responderam à pesquisa
A média de idade das pessoas que responderam à pesquisa

*/

const leia = require("readline-sync")

let idade,
    idGenero,
    idDev,
    continua = true,
    backend = 0,
    frontendMulherETrans = 0,
    mobileHomemETrans40 = 0,
    pessoasNaoBinarias30 = 0,
    pessoasResponderam = 0,
    pessoasNaoResponderam = 0,
    somaIdade = 0,
    pessoa = 0

//falta implementar o os usarios que nao quiseram responder!
console.log("======QUESTIONÁRIO======")
while (continua === true) {
    idade = leia.questionInt("Qual a sua idade?: ")

    console.log("* Identidade de Gênero (Número Inteiro): ")
    console.log("1 - Mulher Cis")
    console.log("2 - Homem Cis")
    console.log("3 - Não Binário")
    console.log("4 - Mulher Trans")
    console.log("5 - Homem Trans")
    console.log("6 - Outros")

    idGenero = leia.questionInt("Qual a sua identidade de genero?")
    console.clear()


    console.log("* Pessoa Desenvolvedora: ")
    console.log("1 - Backend")
    console.log("2 - Frontend")
    console.log("3 - Mobile")
    console.log("4 - FullStack")

    idDev = leia.questionInt("Qual a sua função como Pessoa Desenvolvedora?: ")
    console.clear()

    if (idDev === 1) {
        backend++
    }

    if (idGenero === 1 || idGenero === 4 && idDev === 2) {
        frontendMulherETrans++
    }

    if (idGenero === 4 || idGenero === 5 && idade >= 40) {
        mobileHomemETrans40++
    }

    if (idGenero === 3 && idDev === 4 && idade <= 30) {
        pessoasNaoBinarias30++
    }


    somaIdade += idade
    pessoasResponderam++
    console.clear()
    console.log("OBRIGADO POR RESPONDER A NOSSA PESQUISA!")
    continua = leia.keyInYN("Deseja continuar (Y/N)?")
    console.clear()
}


console.log(`Quantidade de Pessoas Desenvolvedoras Backend: ${backend}`)
console.log(`Quantidade de Mulheres Cis e Trans Desenvolvedoras Frontend: ${frontendMulherETrans}`)
console.log(`Quantidade de Homem Cis e Trans Desenvolvedoras Mobile maiores de 40 anos: ${mobileHomemETrans40}`)
console.log(`Quantidade de Pessoas Não Binários Desenvolvedoras Fullstack menor de 30: ${pessoasNaoBinarias30}`)
console.log(`Número total de pessoas que responderam à pesquisa: ${pessoasResponderam}`)
console.log(`A média de idade das pessoas que responderam à pesquisa: ${somaIdade / pessoasResponderam}`)


