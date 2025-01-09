CREATE DATABASE db_farmacia_bem_estar;
DROP TABLE tb_categorias;

USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias(
	id bigint AUTO_INCREMENT,
	tipo_produto varchar(55) not null,
	PRIMARY KEY(id)
);

INSERT INTO tb_categorias (tipo_produto) VALUES
('Medicamentos'),
('Cuidados com os Cabelos'),
('Higiene Pessoal'),
('Cuidados com a Pele'),
('Suplementos Alimentares');

CREATE TABLE tb_produtos(
	id bigint AUTO_INCREMENT,
	nome varchar(100) NOT NULL,
	categoria_id bigint,
    preco decimal (6, 2),
    PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_produtos (nome, categoria_id, preco) VALUES
('Paracetamol', 1, 10.50),
('Ibuprofeno', 1, 12.90),
('Antigripal', 1, 19.90),
('Dipirona', 1, 7.50),
('Omeprazol', 1, 14.90),
('Shampoo Antiqueda', 2, 19.90),
('Condicionador Hidratante', 2, 22.00),
('Loção para Caspa', 2, 28.90),
('Spray Anti-queda', 2, 35.00),
('Escova de Cabelo', 2, 25.00),
('Sabonete Antisséptico', 3, 15.00),
('Desodorante', 3, 18.00),
('Enxaguante Bucal', 3, 20.00),
('Pomada Antisséptica', 3, 22.50),
('Luva de Procedimento', 3, 35.00),
('Creme Hidratante Facial', 4, 39.90),
('Protetor Solar', 4, 49.90),
('Pomada para Acne', 4, 25.00),
('Loção Hidratante', 4, 30.00),
('Creme Anti-idade', 4, 79.90),
('Vitamina C', 5, 25.00),
('Colágeno', 5, 35.00),
('Ômega 3', 5, 45.00),
('Probióticos', 5, 29.90),
('Creatina', 5, 59.90),
('Dextrose', 5, 39.90),
('BCAA', 5, 49.00),
('Multivitamínico', 5, 40.00),
('Ferro', 5, 19.90),
('Maca Peruana', 5, 24.90),
('Cloreto de Magnésio', 5, 12.00),
('Ácido Hialurônico', 4, 70.00),
('Gel para Massagem', 3, 18.50),
('Escova Progressiva', 2, 150.00),
('Shampoo Desintoxicante', 2, 22.50),
('Sabonete Líquido Antibacteriano', 3, 25.00),
('Fio Dental', 3, 7.90),
('Cotonetes', 3, 4.90),
('Pomada para Dores Musculares', 1, 20.00),
('Antibiótico', 1, 35.00),
('Analgésico para Gripe', 1, 15.00),
('Cálcio', 5, 18.50),
('Vitaminas para Cabelos', 5, 32.00),
('Shampoo Seco', 2, 18.90),
('Pomada para queimaduras', 3, 27.00),
('Pomada para Hemorróidas', 1, 22.50),
('Loção para Olheiras', 4, 39.00),
('Cápsulas de Chá Verde', 5, 25.90),
('Antibiótico para Infecção', 1, 40.00),
('Pomada para Artrose', 1, 28.00),
('Soro Fisiológico', 1, 8.00);

-- SELECT que retorne todes os produtos cujo valor seja maior do que R$ 50,00.
SELECT * FROM tb_produtos WHERE preco > 50.00;

-- SELECT que retorne todes os produtos cujo valor esteja no
-- intervalo R$ 5,00 e R$ 60,00.
SELECT * FROM tb_produtos WHERE preco BETWEEN 5.00 AND 60.00;

-- SELECT utilizando o operador LIKE, buscando todes os
-- produtos que possuam a letra C no atributo nome.
SELECT * FROM tb_produtos WHERE nome LIKE '%C%';

-- SELECT utilizando a cláusula INNER JOIN,
-- unindo os dados da tabela tb_produtos com
-- os dados da tabela tb_categorias.
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela
--  tb_produtos com os dados da tabela tb_categorias, onde traga apenas
--  os produtos que pertençam a uma categoria específica (Exemplo: Todes
--  os produtos que pertencem a categoria cosméticos).
SELECT * FROM tb_produtos INNER JOIN tb_categorias ON tb_produtos.categoria_id = tb_categorias.id HAVING tipo_produto LIKE "%Medicamentos%" ; ; 

SELECT * FROM tb_produtos;
SELECT * FROM tb_categorias;