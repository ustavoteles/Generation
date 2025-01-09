 CREATE DATABASE db_curso_da_minha_vida;
 
 use db_curso_da_minha_vida;
 DROP TABLE tb_cursos;

 CREATE TABLE tb_categorias(
	id bigint AUTO_INCREMENT,
	tipo_categoria varchar(55) not null,
	PRIMARY KEY(id)
);

INSERT INTO tb_categorias (tipo_categoria) VALUES
('Java'),
('Javascript'),
('Python'),
('C#'),
('PHP'),
('Ruby'),
('Go'),
('Swift'),
('Kotlin'),
('TypeScript'),
('Rust'),
('HTML/CSS');

CREATE TABLE tb_cursos(
	id bigint AUTO_INCREMENT,
	nome varchar(100) NOT NULL,
	categoria_id bigint,
    preco decimal (8, 2),
    PRIMARY KEY (id),
	FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id)
);

INSERT INTO tb_cursos(nome,categoria_id,preco) VALUES 
('Curso Completo de Java', 1, 1199.90),
('Java para Iniciantes', 1, 79.90),
('Java Avançado', 1, 299.90),
('Desenvolvimento Web com Java', 1, 249.90),
('Java para Android', 1, 179.00),
('Curso de JavaScript Completo', 2, 149.90),
('JavaScript para Iniciantes', 2, 69.90),
('JavaScript Avançado', 2, 199.90),
('Desenvolvimento Front-End com JavaScript', 2, 219.90),
('JavaScript para Desenvolvimento de Jogos', 2, 189.90),
('Python para Iniciantes', 3, 89.90),
('Curso Completo de Python', 3, 249.90),
('Python para Ciência de Dados', 3, 549.90),
('Python para Web Development', 3, 1199.90),
('Automatizando Tarefas com Python', 3, 129.90),
('Desenvolvimento de Software com C#', 4, 239.90),
('C# para Iniciantes', 4, 99.90),
('C# e .NET para Web', 4, 189.90),
('C# Avançado', 4, 249.90),
('Desenvolvimento de Jogos com Unity e C#', 4, 299.90),
('Curso Completo de PHP', 5, 199.90),
('PHP para Iniciantes', 5, 89.90),
('PHP para Desenvolvimento Web', 5, 179.90),
('Desenvolvimento de Sites Dinâmicos com PHP', 5, 249.90),
('PHP Avançado', 5, 1299.90),
('Ruby para Iniciantes', 6, 79.90),
('Desenvolvimento Web com Ruby on Rails', 6, 199.90),
('Ruby Avançado', 6, 149.90),
('Ruby e Desenvolvimento de API', 6, 179.90),
('Automatizando Processos com Ruby', 6, 129.90),
('Curso Completo de Go', 7, 249.90),
('Go para Iniciantes', 7, 99.90),
('Go para Desenvolvimento Web', 7, 1179.90),
('Go Avançado', 7, 229.90),
('Desenvolvimento de Microservices com Go', 7, 879.90),
('Swift para Iniciantes', 8, 129.90),
('Desenvolvimento de Apps com Swift', 8, 249.90),
('Swift Avançado', 8, 199.90),
('Desenvolvimento de Jogos com Swift', 8, 219.90),
('Swift para iOS', 8, 179.90),
('Kotlin para Iniciantes', 9, 109.90),
('Desenvolvimento Android com Kotlin', 9, 199.90),
('Kotlin Avançado', 9, 239.90),
('Curso Completo de Kotlin', 9, 2149.90),
('Kotlin para Backend', 9, 219.90),
('Curso Completo de TypeScript', 10, 399.90),
('TypeScript para Iniciantes', 10, 89.90),
('Desenvolvimento Web com TypeScript', 10, 229.90),
('TypeScript Avançado', 10, 249.90),
('Programação Funcional com TypeScript', 10, 279.90),
('Rust para Iniciantes', 11, 109.90),
('Desenvolvimento de Sistemas com Rust', 11, 529.90),
('Rust Avançado', 11, 249.90),
('Desenvolvimento de Software Seguro com Rust', 11, 269.90),
('Rust para Backend', 11, 219.90),
('Curso Completo de HTML e CSS', 12, 549.90),
('HTML para Iniciantes', 12, 69.90),
('CSS Avançado', 12, 179.90),
('Desenvolvimento de Layout Responsivo com HTML e CSS', 12, 3199.90),
('HTML5 e CSS3 para Web Design', 12, 189.90);

-- SELECT que retorne todes os cursos cujo valor seja maior do que R$ 500,00.
SELECT * FROM tb_cursos WHERE preco > 500.00;

-- SELECT que retorne todes os cursos cujo valor
-- esteja no intervalo R$ 600,00 e R$ 1000,00.
SELECT * FROM tb_cursos WHERE preco BETWEEN 600.00 AND 1000.00;

-- SELECT utilizando o operador LIKE, buscando
-- todes os cursos que possuam a letra J no atributo nome.
SELECT * FROM tb_cursos WHERE nome LIKE '%J%';

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados 
-- da tabela tb_cursos com os dados da tabela tb_categorias.
SELECT * FROM tb_cursos INNER JOIN tb_categorias ON tb_cursos.categoria_id = tb_categorias.id; 

-- SELECT utilizando a cláusula INNER JOIN, unindo os dados da
--  tabela tb_cursos com os dados da tabela tb_categorias, onde 
-- traga apenas os produtos que pertençam a uma categoria específica 
-- (Exemplo: Todes os cursos que pertencem a categoria Java).
SELECT * FROM tb_cursos INNER JOIN tb_categorias 
ON tb_cursos.categoria_id = tb_categorias.id HAVING tipo_categoria LIKE "JAVA" ; ; 
