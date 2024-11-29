programa
{
	
	funcao inicio()
	{
		cadeia pais
		inteiro idade
		logico permissao
		
		escreva("Country/país? (BRA, USA, POR) \n")
		leia(pais)
		limpa()
		se(pais=="BRA" ou pais =="POR"){
			escreva("Idade: ?")
		} senao {
			escreva("Age: ?")
		}
		
		leia(idade)
		limpa()

		se((pais=="BRA" e idade >=18) ou (pais=="USA" e idade>=21) ou (pais=="POR")){
			permissao = verdadeiro
		}senao{
			permissao = falso
		}
		
		se(permissao e (pais=="POR" ou pais=="BRA")){
			escreva("Permitido")	
		}senao se(permissao e pais=="USA"){
			escreva("Allowed")
		}senao se(nao permissao e pais=="USA"){
			escreva("Not allowed")
		}senao se(nao permissao e (pais=="POR" ou pais=="BRA")){
			escreva("Nao permitido")
		}
	}
}
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 713; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */