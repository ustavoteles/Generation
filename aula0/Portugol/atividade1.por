programa
{
	
	funcao inicio()
	{
		inteiro vetor[]={2,5,1,3,4,9,7,8,10,6}
		inteiro reserva = 0
		inteiro lista = 10
		
		para(inteiro i=0;i<lista-1;i++)
		{
			para(inteiro c=0; c < lista-i-1;c++)
			{
			se(vetor[c] <vetor[c+1])
			{
				reserva=vetor[c]
				vetor[c]=vetor[c+1]
				vetor[c+1]=reserva	
			}
			}
		}
		para(inteiro i=0;i<lista;i++)
		{
			escreva(vetor[i], " ,")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 317; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor, 6, 10, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz;
 */