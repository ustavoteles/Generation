programa
{
	
	funcao inicio()
	{
		inteiro x,acumulador=0
		faca
		{
			escreva("A soma por enquanto está em: ",acumulador,"\n")
			escreva("Entre com um valor: ")
			leia(x)
			acumulador=acumulador+x
			
		}enquanto(x!=0)//enquanto o usuario nao digitar zero, o baguio roda.
		escreva("Eu acumulei: ",acumulador)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 210; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */