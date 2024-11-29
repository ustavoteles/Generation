programa
{
	
	funcao inicio()
	{
		inteiro x1,x2,x3

		leia(x1)
		leia(x2)
		leia(x3)

		se(x1 > x2 e x1 > x3){
			se(x2>x3){
				escreva(" n1: ",x1," n2: ",x2," n3: ",x3)
			}senao{
				escreva(" n1: ",x1," n3: ",x3," n2: ",x2)
			}
		}senao se(x2>x3){
			escreva(" n2: ",x2," n3: ",x3," n1: ",x1)
		} senao{
			escreva(" n3: ",x3," n2: ",x2," n1: ",x1)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 208; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */