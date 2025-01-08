CREATE TABLE tb_marcas(
	id bigint auto_increment,
    nome varchar(20) not null,
    ativo boolean,
    primary key(id)
);

INSERT INTO tb_marcas (nome, ativo)
VALUES 
    ("Nike", true),
    ("Adidas", true),
    ("Puma", true),
    ("Under Armour", true),
    ("Reebok", true),
    ("New Balance", true),
    ("Asics", true),
    ("Converse", true),
    ("Vans", true),
    ("Skechers", true),
    ("Fila", true),
    ("Jordan", true),
    ("Oakley", true),
    ("Columbia", true),
    ("North Face", true),
    ("Timberland", true),
    ("Crocs", true),
    ("Havaianas", true),
    ("Reef", true),
    ("Vibram", true),
    ("Mizuno", true);
/*populando o banco*/

ALTER TABLE tb_marcas add descricao varchar(255);
/*criando a coluna descricao com 255 caracteres de limite*/

ALTER TABLE tb_marcas DROP COLUMN descricao ;
/*EXCLUINDO A coluna DESCRICAO*/

drop table tb_marcas;
/*EXCLUINDO A TABELA marcas*/

SELECT * FROM tb_marcas;

CREATE TABLE tb_produtos(
	id bigint auto_increment,
    nome varchar(30) not null,
    preco decimal,
    marca_id bigint not null,
    primary key(id),
    foreign key(marca_id) references tb_marcas(id)
);
/*CRIANDO A TABELA PRODUTOS COM A CHAVE ESTRANGEIRA REFERENCIANDO 
O ID DA TABELA MARCAS*/

INSERT INTO tb_produtos (nome, preco, marca_id) 
VALUES 
    ("Camisa", 58.90, 2),
    ("Tênis", 199.90, 1),
    ("Calça", 119.90, 3),
    ("Jaqueta", 149.90, 4),
    ("Bermuda", 79.90, 2),
    ("Boné", 39.90, 5),
    ("Meia", 19.90, 6),
    ("Tênis Esportivo", 259.90, 1),
    ("Mochila", 89.90, 3),
    ("Tênis Casual", 159.90, 7),
    ("Camiseta", 49.90, 8),
    ("Shorts", 69.90, 9),
    ("Jaqueta de Couro", 399.90, 10),
    ("Tênis Running", 220.00, 11),
    ("Bota", 179.90, 12),
    ("Chinelo", 29.90, 13),
    ("Sandalha", 49.90, 14),
    ("Suedine", 59.90, 15),
    ("Tênis de Skate", 129.90, 16);

ALTER TABLE tb_produtos modify column preco decimal (6,2);

SELECT * FROM tb_produtos where marca_id = 3 and nome like '%cal%';
/*AQUI ELE VAI SELECIONAR DENTRO DA TABELA PRODUTOS AONDE O ID É IGUAL A 3
E COM NOME COM QUE POSSUA "CAL"*/

SELECT * FROM tb_produtos where marca_id = 3 or nome like '%cal%';


SELECT * FROM tb_produtos;