CREATE DATABASE db_generation_game_online;

USE db_generation_game_online;

-- Criar a tabela tb_classes
CREATE TABLE tb_classes(
	id bigint auto_increment,
    tipo_classe varchar(55) not null,
    PRIMARY KEY(id)
    );
    
INSERT INTO tb_classes (tipo_classe)
VALUES  ("Cavaleiro"),
		("Mago"),
		("Ladino"),
		("Assassino"),
		("Bardo");


    
-- Criar a tabela tb_personagens
CREATE TABLE tb_personagens(
	id bigint auto_increment,
	nome varchar(255) NOT NULL,
    classe_id bigint,
    poder_ataque bigint,
    poder_defesa bigint,
    PRIMARY KEY (id),
	FOREIGN KEY (classe_id) REFERENCES tb_classes(id)
);

DROP TABLE tb_personagens;

INSERT INTO tb_personagens (nome, classe_id, poder_ataque, poder_defesa)
VALUES ('Arthur', 1, 1200,1100),
('Merlin', 2, 850,700),
('Ezio', 3, 1050,950),
('Voldemort', 2, 1100,750),
('Alaric', 1, 1300,1200),
('Silas', 4, 1150,8002),
('Lara', 3, 950,900),
('Dante', 4, 1400,850),
('Eowyn', 1, 1250,1000),
('Jareth', 5, 980,1150),
('Rengar', 4, 13400,3400),
('Virgil', 1, 14250,4250),
('Kratos', 5, 9280,3820);

-- SELECT que retorna todos os personagens cujo 
-- poder de ataque seja maior do que 2000.
SELECT * FROM tb_personagens WHERE poder_ataque > 2000;

-- SELECT que retorne todes os personagens cujo poder 
-- de defesa esteja no intervalo 1000 e 2000.
SELECT * FROM tb_personagens WHERE poder_defesa BETWEEN 1000 AND 2000;

-- SELECT utilizando o operador LIKE, buscando todos os personagens 
-- que possuam a letra C no atributo nome.
SELECT * FROM tb_personagens WHERE nome LIKE '%C%';

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados 
-- da tabela tb_personagens com os dados da tabela tb_classes.
SELECT * FROM tb_personagens INNER JOIN tb_classes ON tb_personagens.classe_id = tb_classes.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela
-- tb_personagens com os dados da tabela tb_classes, onde traga apenas os 
-- personagens que pertençam a uma classe específica
-- (Exemplo: Todos os personagens da classe dos arqueiros).
-- Nesse caso estou testando pra ver se tem da classe Assassino
SELECT * FROM tb_personagens INNER JOIN tb_classes ON tb_personagens.classe_id = tb_classes.id HAVING tipo_classe = "assassino"; 

SELECT * FROM tb_classes;

SELECT * FROM tb_personagens;
