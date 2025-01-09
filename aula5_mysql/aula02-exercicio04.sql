CREATE DATABASE db_cidade_das_carnes;

use db_cidade_das_carnes;

CREATE TABLE tb_categorias(
	id bigint AUTO_INCREMENT,
	tipo_carne varchar(55) not null,
	PRIMARY KEY(id)
);

INSERT INTO tb_categorias (tipo_carne) VALUES
('Bovina'),
('Suína'),
('Frango');

CREATE TABLE tb_produtos(
	id bigint AUTO_INCREMENT,
	nome varchar(100) NOT NULL,
	categoria_id bigint,
    preco decimal (6, 2),
    PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos(nome,categoria_id, preco) VALUES
('Tomahawk', 1, 299.90),
('Bife de Tira', 1, 199.90),
('T-bone', 1, 259.90),
('Coxão Duro', 1, 79.90),
('Pernil Suíno com Osso', 2, 89.90),
('Presunto de Parma', 2, 199.90),
('Costelinha Suína Defumada', 2, 79.90),
('Filé de Lombo Suíno', 2, 120.00),
('Frango Assado Temperado', 3, 50.00),
('Frango Desossado e Recheado', 3, 79.90),
('Peito de Frango Orgânico', 3, 49.90),
('Asa de Frango com Molho Especial', 3, 35.00),
('Frango à Passarinho', 3, 45.00);

-- SELECT que retorne todes os produtos cujo valor seja maior do que R$ 50,00.
SELECT * FROM tb_produtos WHERE preco > 50.00;

-- SELECT que retorne todes os produtos cujo valor 
-- esteja no intervalo R$ 50,00 e R$ 150,00.
SELECT * FROM tb_produtos WHERE preco BETWEEN 50.00 AND 150.00;

-- SELECT utilizando o operador LIKE, 
-- buscando todes os produtos que possuam a letra C no atributo nome.
SELECT * FROM tb_produtos WHERE nome LIKE '%C%';

-- SELECT utilizando a cláusula INNER JOIN,
-- unindo os dados da tabela tb_produtos com 
-- os dados da tabela tb_categorias.
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela
-- tb_produtos com os dados da tabela tb_categorias, onde traga apenas
-- os produtos que pertençam a uma categoria específica
-- (Exemplo: Todes os produtos que pertencem a categoria aves ou frutas).
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id HAVING tipo_carne LIKE "%Frango%" ; ; 

