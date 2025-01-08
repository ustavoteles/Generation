CREATE DATABASE db_ecommerce;

USE db_ecommerce;

CREATE TABLE tb_produtos(
	id bigint auto_increment,
    nome varchar(200) not null,
    preco decimal not null,
    quantidade int,
    categoria varchar(200),
    PRIMARY KEY(id)
);

ALTER TABLE tb_produtos CHANGE nome nome_produto varchar(200);

ALTER TABLE tb_produtos MODIFY preco decimal (7,2);

INSERT INTO tb_produtos (nome_produto, preco, quantidade, categoria)
VALUES  ("Camisa Regata Nike", 78.99, 4, "Camisa"),
		("Camisa Manga Longa Adidas", 137.99, 9, "Camisa"),
		("Tenis Nike", 738.99, 3, "Tenis"),
		("Tenis Oakley", 588.99, 2, "Tenis"),
		("Calça Moletom Nike TechFleece", 178.99, 12, "Calça"),
		("Calça Jeans", 182.99, 4, "Calça");

INSERT INTO tb_produtos (nome_produto, preco, quantidade, categoria)
VALUES  ("Moletom Adidas", 378.99, 4, "Casaco"),
		("Conjunto Nike TechFleece", 1137.99, 9, "Conjunto");

SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 500;

SELECT * FROM tb_produtos WHERE preco < 500;

UPDATE tb_produtos SET preco = 92.00 WHERE preco = 78.99;

SET SQL_SAFE_UPDATES = 0; -- TRAVA PRA JUNIOR --
