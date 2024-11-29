programa
{
	
	funcao inicio()
	{
		inteiro vetor[]= {2,5,1,3,4,9,7,8,10,6}
		inteiro soma
		inteiro media

		soma=0
		

		para(inteiro c=0;c<=9;c++){
			soma+=vetor[c]
			
		}
		
		media=soma/10
		
		escreva(" Números pares: ")
		para(inteiro c=0;c<=9;c++){
			se (vetor[c] % 2 ==0){
				
				escreva(vetor[c], " ,")
				
			}
		}

		escreva("\n Números Ímpares: ")
		para(inteiro c=0;c<=9;c++){
			se (vetor[c] % 2 !=0){
				
				escreva(vetor[c], " ,")
				
			}
		}
		escreva("\n Soma: ",soma)
		escreva("\n Media: ",media,"\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */