-- Apagar Banco de Dados db_quitanda
DROP DATABASE db_quitanda;

 
-- Recriar o Banco de dados db_quitanda
CREATE DATABASE db_quitanda;
 
-- Selecionar o Banco de Dados db_quitanda
USE db_quitanda;
 
-- Criar a tabela tb_categorias
CREATE TABLE tb_categorias(
id bigint AUTO_INCREMENT,
descricao varchar(255) NOT NULL,
PRIMARY KEY (id)
);
 
-- Insere dados na tabela tb_categorias
INSERT INTO tb_categorias (descricao)
VALUES ("Frutas");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Verduras");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Legumes");
 
INSERT INTO tb_categorias (descricao)
VALUES ("Temperos");
 
 
INSERT INTO tb_categorias (descricao)
VALUES ("Ovos");
 
INSERT INTO tb_categorias (descricao)
VALUES ("outros");
 
-- Lista todos os dados da tabela tb_categorias
SELECT * FROM tb_categorias;
 
-- Criar a Tabela tb_produtos
CREATE TABLE tb_produtos(
id bigint AUTO_INCREMENT,
nome varchar(255) NOT NULL,
quantidade int, 
dtvalidade date NULL,
preco decimal(6, 2),
categoria_id bigint, 
PRIMARY KEY (id),
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);
 
-- Insere dados na tabela tb_produtos
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Maçã", 1000, "2022-03-07", 1.99, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Banana", 1300, "2022-03-08", 5.00, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Batata doce", 2000, "2022-03-09", 10.00, 3);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Alface", 300, "2022-03-10", 7.00, 2);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Cebola", 1020, "2022-03-08", 5.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Ovo Branco", 1000, "2022-03-07", 15.00, 5);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Agrião", 1500, "2022-03-06", 3.00, 2);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Cenoura", 1800, "2022-03-09", 3.50, 3);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Pimenta", 1100, "2022-03-15", 10.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Alecrim", 130, "2022-03-10", 5.00, 4);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Manga", 200, "2022-03-07", 5.49, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Laranja", 3000, "2022-03-13", 10.00, 1);
 
INSERT INTO tb_produtos (nome, quantidade, dtvalidade, preco, categoria_id)
VALUES ("Couve", 100, "2022-03-12", 1.50, 2);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Tomate", 1105, "2022-03-15", 3.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, dtvalidade, preco, categoria_id)
VALUES("Rabanete", 1200, "2022-03-15", 13.00, 3);
 
INSERT INTO tb_produtos(nome, quantidade, preco)
VALUES("Sacola Cinza", 1118, 0.50);
 
INSERT INTO tb_produtos(nome, quantidade, preco)
VALUES("Sacola Verde", 1118, 0.50);
 
-- Visualiza todos os dados da tabela tb_produtos
SELECT * FROM tb_produtos;

-- Visualiza os dados ordenando em ordem crescente com base na primeira letra do nome
SELECT * FROM tb_produtos ORDER BY nome;
-- Visualiza os dados ordenando em ordem crescente com base na primeira letra do nome 
-- (ASC É MEIO IRRELEVANTE POIS ELE JA FAZ ISSO POR PADRAO)
SELECT * FROM tb_produtos ORDER BY nome ASC;


-- Visualiza os dados ordenando em ordem descendente com base na primeira letra do nome
SELECT * FROM tb_produtos ORDER BY nome DESC;

-- Visualiza os dados ordenando em ordem crescente com base na primeira letra do nome E DO PREÇO
SELECT * FROM tb_produtos ORDER BY nome, preco;

-- Visualiza os dados ordenando utilizando o preço como parametro entre 10 e 15
SELECT * FROM tb_produtos WHERE preco BETWEEN 10 AND 15;

-- Visualiza os dados ordenando utilizando o preço como parametro aonde os valores sejam igual a 5, 10 ou 15
SELECT * FROM tb_produtos WHERE preco in (5,10,15);

-- Visualiza apenas dados que terminam tem RA no meio do nome
SELECT * FROM tb_produtos WHERE nome LIKE '%ra%';

-- Visualiza apenas dados que começam com RA
SELECT * FROM tb_produtos WHERE nome LIKE 'ra%';

-- Visualiza apenas dados que terminam com RA
SELECT * FROM tb_produtos WHERE nome LIKE '%ra';

-- NORMAS QUE O BANCO ESTÁ CONFIGURADO
-- ci é case insensitive 
-- ai é accentuation insensitive 
SELECT @@collation_database;

-- função de soma dos preços
SELECT sum(preco) as soma FROM tb_produtos;

-- função de media dos preços
SELECT avg(preco) as media FROM tb_produtos;

-- função de contar quantidade de linhas 
SELECT count(*) as contar FROM tb_produtos;

-- função de contar os atributos de id porém nao conta os nulos
SELECT count(categoria_id) as contar FROM tb_produtos;

-- função de ver o preço maior
SELECT max(preco) as contar FROM tb_produtos;

-- função de ver o preço menor
SELECT min(preco) as contar FROM tb_produtos;

-- COMPARA OS DOIS ID E OS QUE TEM VALOR IGUAL ELE RETORNA, OS QUE NAO TEM ELE NAO RETORNA
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- COMPARA OS DOIS ID E OS QUE TEM VALOR IGUAL ELE RETORNA, E INCLUI OS DA ESQUERDA INDEPENDENTE DO RESULTADO
SELECT * FROM tb_produtos LEFT JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- COMPARA OS DOIS ID E OS QUE TEM VALOR IGUAL ELE RETORNA, E INCLUI OS DA DIREITA INDEPENDENTE DO RESULTADO
SELECT * FROM tb_produtos RIGHT JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- SERÁ SELECIONADO AS CATEGORIAS(DESCRICAO), SERA FEITO A MEDIA
SELECT tb_categorias.descricao, avg(preco) as preco_medio
-- VAI PEGAR OS QUE NAO SAO VAZIOS E QUE ESTAO COM ID
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id
-- AGRUPA PELA DESCRICAO
GROUP BY tb_categorias.descricao
-- MOSTRA APENAS A MEDIA MAIOR QUE 5
HAVING preco_medio > 5
-- ORDENA DE FORMA DESCENDENTE
ORDER BY tb_categorias.descricao DESC;

-- SERA SELECIONADO APENAS OS QUE TEM CATEGORIA DEFINIDA E QUE SAO IGUAL A 2
SELECT * FROM tb_produtos INNER JOIN tb_categorias
ON tb_produtos.categoria_id = tb_categorias.id
WHERE tb_produtos.categoria_id = 2;
