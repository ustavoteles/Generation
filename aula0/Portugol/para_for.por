programa
{
	
	funcao inicio()
	{
		inteiro x,tab,res

		escreva("Qual tabuada você deseja visualizar? Digite o valor: ")
		leia(tab)

		para(x=0;x<=10;x++)
		{
			res=x*tab
			escreva(tab, " X ", x, " = " ,res,"\n")  
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 177; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */