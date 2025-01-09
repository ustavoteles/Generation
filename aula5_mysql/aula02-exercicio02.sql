CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

DROP TABLE tb_pizzas;

DROP TABLE tb_categorias;


-- Criar a tabela tb_categorias
CREATE TABLE tb_categorias(
	id bigint AUTO_INCREMENT,
	tipo_pizza varchar(55) not null,
	PRIMARY KEY(id)
);

INSERT INTO tb_categorias (tipo_pizza) VALUES
('Pizza Grande (salgada)'),
('Pizza Broto (salgada)'),
('Pizza Grande (salgada) com borda recheada'),
('Pizza Grande (doce)'),
('Pizza Broto (doce)');


-- Criar a tabela tb_pizzas
CREATE TABLE tb_pizzas(
	id bigint AUTO_INCREMENT,
	sabor varchar(100) NOT NULL,
	categoria_id bigint,
    preco decimal (6, 2),
    PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_pizzas (sabor, categoria_id, preco) VALUES
('Margherita', 1, 89.90),
('Calabresa', 1, 98.50),
('Quatro Queijos', 1, 120.00),
('Portuguesa', 1, 105.00),
('Frango com Catupiry', 1, 130.00),
('Napolitana', 1, 145.00),
('Mussarela', 2, 45.00),
('Bacon', 2, 55.00),
('Peperoni', 2, 60.00),
('Alho e Óleo', 2, 52.00),
('Cebola', 2, 48.00),
('Vegetariana', 2, 58.00),
('Chocolate com Morango', 3, 150.00),
('Romeu e Julieta', 3, 140.00),
('Banana com Canela', 3, 160.00),
('Mousse de Chocolate', 3, 170.00),
('Abacaxi com Coco', 4, 95.00),
('Brigadeiro', 4, 110.00),
('Leite Condensado com Coco', 4, 120.00),
('Frango com Bacon', 5, 70.00),
('Coração de Frango', 5, 75.00);

-- SELECT que retorne todas as pizzas cujo valor seja maior do que R$ 45,00.
SELECT * FROM tb_pizzas WHERE preco > 40.00;

-- SELECT que retorne todas as pizzas cujo valor 
-- esteja no intervalo R$ 50,00 e R$ 100,00.
SELECT * FROM tb_pizzas WHERE preco BETWEEN 50.00 AND 100.00;

-- SELECT utilizando o operador LIKE, buscando todas as pizzas
--  que possuam a letra M no atributo nome.
SELECT * FROM tb_pizzas WHERE sabor LIKE '%M%';

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela 
-- tb_pizzas com os dados da tabela tb_categorias.
SELECT * FROM tb_pizzas INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela 
-- tb_pizzas com os dados da tabela tb_categorias, onde traga apenas as
--  pizzas que pertençam a uma categoria 
-- específica (Exemplo: Todas as pizzas que são doce).
SELECT * FROM tb_pizzas INNER JOIN tb_categorias ON tb_pizzas.categoria_id = tb_categorias.id HAVING tipo_pizza LIKE "%doce%" ; 


SELECT * FROM tb_pizzas;
SELECT * FROM tb_categorias;