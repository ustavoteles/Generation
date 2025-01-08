CREATE DATABASE db_registro_escolar;

USE db_registro_escolar ;

CREATE TABLE tb_estudantes(
	id bigint auto_increment,
    nome varchar(200) not null,
    data_nascimento date,
    ano_escolar int,
    nota_bimestre decimal,
    primary key (id)
);

ALTER TABLE tb_estudantes MODIFY nota_bimestre decimal (4,2);


INSERT INTO tb_estudantes(nome, data_nascimento, ano_escolar, nota_bimestre)
VALUES("Gustavo","2008-05-24",4,"10.0"),
	  ("Joana","2004-05-24",8,"4.0"),
	  ("Adalberto","2008-05-24",4,"5.5"),
	  ("Kevin","2004-05-24",8,"7.5"),
	  ("João","2002-05-24",4,"9.0"),
	  ("Maria","2008-05-24",4,"2.0"),
	  ("Livia","2004-05-24",8,"6.0"),
	  ("Nicolas","2007-05-24",5,"3.5");

SELECT * FROM tb_estudantes WHERE nota_bimestre > 7.0;

SELECT * FROM tb_estudantes WHERE nota_bimestre < 7.0;

UPDATE tb_estudantes SET nota_bimestre = 5 WHERE nota_bimestre = 2;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM tb_estudantes;