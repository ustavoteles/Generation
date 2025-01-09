 CREATE DATABASE  db_construindo_vidas;
 
 use db_construindo_vidas;
 
 CREATE TABLE tb_categorias(
	id bigint AUTO_INCREMENT,
	tipo_categoria varchar(55) not null,
	PRIMARY KEY(id)
);

INSERT INTO tb_categorias (tipo_categoria) VALUES
('Ferragens'),
('Tintas e Vernizes'),
('Elétrica'),
('Hidráulica'),
('Madeiras'),
('Ferramentas');

CREATE TABLE tb_produtos(
	id bigint AUTO_INCREMENT,
	nome varchar(100) NOT NULL,
	categoria_id bigint,
    preco decimal (6, 2),
    PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos (nome,categoria_id, preco) VALUES
('Parafuso 1/4"', 1, 5.99),
('Chave Inglesa', 1, 29.90),
('Arruela', 1, 0.50),
('Tinta Acrílica Branca', 2, 85.00),
('Verniz Madeira', 2, 45.00),
('Esmalte Sintético', 2, 38.90),
('Fio Elétrico 1,5mm', 3, 2.50),
('Interruptor Simples', 3, 10.99),
('Disjuntor 15A', 3, 25.00),
('Tubo PVC 50mm', 4, 10.50),
('Registro de Gaveta', 4, 15.00),
('Conexão Tê', 4, 6.80),
('Madeira para Piso', 5, 150.00),
('Compensado 18mm', 5, 90.00),
('Viga de Madeira', 5, 120.00),
('Martelo 500g', 6, 25.00),
('Serra Elétrica', 6, 240.00),
('Alicate de Pressão', 6, 45.00);

-- SELECT que retorne todes os produtos cujo valor seja maior do que R$ 100,00.
SELECT * FROM tb_produtos WHERE preco > 100.00;

-- SELECT que retorne todes os produtos cujo valor esteja
-- no intervalo R$ 70,00 e R$ 150,00.
SELECT * FROM tb_produtos WHERE preco BETWEEN 70.00 AND 150.00;

-- SELECT utilizando o operador LIKE, buscando todes os produtos que 
-- possuam a letra C no atributo nome.
SELECT * FROM tb_produtos WHERE nome LIKE '%C%';

-- SELECT utilizando a cláusula INNER JOIN, unindo os
-- dados da tabela tb_produtos com os dados da tabela tb_categorias.
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela
--  tb_produtos com os dados da tabela tb_categorias, onde traga apenas
--  os produtos que pertençam a uma categoria específica 
-- (Exemplo: Todes os produtos que pertencem a categoria hidráulica).
SELECT * FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id HAVING tipo_categoria LIKE "%Hidraulica%" ; ; 


SELECT * FROM tb_produtos;
SELECT * FROM tb_categorias;