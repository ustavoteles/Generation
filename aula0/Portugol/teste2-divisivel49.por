programa
{
	
	funcao inicio()
	{
		inteiro x,div,div2
		logico resultado
		
		leia(x)
		
		div = x % 4
		div2 = x % 9

		se(div==0 ou div2==0){
			resultado=verdadeiro
			escreva(resultado)
		}senao{
		resultado=falso
		escreva(resultado)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 107; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */