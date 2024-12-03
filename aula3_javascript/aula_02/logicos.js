const leia =  require ('readline-sync')

//Dados Usuário

const usuario ='user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log('\n Tela de Login')

let usuarioLogin = leia.question('Digite o seu usuário: ')

let senhaLogin = leia.question('Digite a sua senha: ', {
    hideEchoBack: true, //esconde o que você digita
})

if (usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja bem Vindo! Usuário autenticado com Sucesso!"
} else {
    //a variavel vai ser var pois se fosse usado o let, ela seria descartada pois 
    //o restante esta fora do escopo
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuário ativo!")
} else{
    console.log("Usuário está inativo! Contate o Admnistrador ")
    process.exit(0)//sai do programa e faz mais nada
}

if(isAdmin || isGerente){
    console.log("Acesso ao painel Admnistrativo Liberado!")
} else{
    console.log("Acesso ao painel Admnistrativo Negado!")
}