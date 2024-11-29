programa
{
	
	funcao inicio()
	{
		cadeia idiomas[8]={"Japonês",
		"Neerlandês, Papiamento, Língua Frisia",
		"Inglês","Português","Português","Lituano",
		"Azeri, Armênio",
		"Africâner, inglês, ndebele,xhosa,zule,zoto do norte,soto do sul, tswana,suázi,venda,tsonga"}

		inteiro pais
	
		escreva("Escolha um país:\n(1) Japão\t(5) Portugal\n(2) Holanda\t(6) Lituânia\n(3) Austrália\t(7) Azerbaijão\n(4) Brasil\t(8) África do Sul\n\n")
	
		leia(pais)
		se(pais>=0 e pais<8){
		escreva(idiomas[pais-1])
		} senao{
			escreva("Escolha um país válido") 
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 442; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */