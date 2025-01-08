CREATE DATABASE db_bancorh;

USE db_bancorh;

CREATE TABLE tb_colaboradores(
	id bigint auto_increment,
    primeiro_nome varchar(255) not null,
    sobrenome varchar(100) not null,
    cargo varchar(100),
    salario decimal,
    admissao_data date,
    PRIMARY KEY (id)
);

ALTER TABLE tb_colaboradores MODIFY salario decimal(8,2);

INSERT INTO tb_colaboradores (primeiro_nome, sobrenome, cargo, salario, admissao_data)
VALUES ("Gustavo","Teles","Desenvolvedor Junior", 3000.00, "2025-04-15"),
("Roberto", "Alves","Tech Lead",12000.00,"2023-05-12"),
("Elisangela", "Sales", "Desenvolvedor Pleno",6000.00,"2024-04-15"), 
("Pedro","Almeida","Estagiario",1300.00,"2025-04-15");


SELECT * FROM tb_colaboradores WHERE salario > 2000.00;

SELECT * FROM tb_colaboradores WHERE salario < 2000.00;

UPDATE tb_colaboradores SET nome = "Maxwel" WHERE id = 2;

SELECT * FROM tb_colaboradores;