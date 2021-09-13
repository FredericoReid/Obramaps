create database obramaps;

use obramaps;

create table casos(
	id int auto_increment,
	categoria varchar(100),
	titulo varchar(500),
	descricao varchar(500),
	informacao_extra varchar(500),
	imagem varchar(100),
	primary key(id)
);

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("geladeira", "./imagens/caso1.jpg", "Telha Quebrada", "Minha telha está quebrada", "");

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("geladeira", "./imagens/caso2.jpg", "Porta quebrada", "Minha porta quebrou recentemente", "");

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("geladeira", "./imagens/caso3.jpg", "Piso Quebrado", "Preciso de uma reforma em meu piso", "");

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("fogao", "./imagens/caso4.jpg", "Janela Quebrada", "Minha janela quebrou", "");

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("fogao", "./imagens/caso5.jpg", "Colchão velho", "Meu colchao está muito velho e preciso de um novo", "");

insert into casos (categoria, imagem, titulo, descricao, informacao_extra)
values ("microondas", "./imagens/caso6.jpg", "Fogão antigo", "Meu fogão já não funciona mais", "");



create table usuarios(
	id int auto_increment,
	email varchar(100),
	senha varchar(500),
	primary key(id)
);

insert into usuarios (email, senha)
values ("usuario1@gmail.com", "123456");



-- create table pedidos(
-- 	id int auto_increment,
-- 	nome_cliente varchar(100),
-- 	endereco varchar(500),
-- 	email varchar(200),
-- 	telefone varchar(80),
-- 	titulo varchar(300),
-- 	descricao varchar(500),
--     informacao_extra varchar(500),
-- 	primary key(id)
-- );

-- insert into pedidos (nome_cliente, endereco, telefone, titulo, descricao, informacao_extra)
-- values ("Marcos Rocha", "Ruas das Palmeiras, 718 - Vila Santa Clementina", "99999-9999", "Ajuda com mudança", "Preciso de ajuda com uma mudança no dia 5", "");

-- insert into pedidos (nome_cliente, endereco, telefone, titulo, descricao, informacao_extra)
-- values ("Fernanda Silva", "Rua Rua Deolinda de Almeida Corrêa , 13 - Distrito Industrial Nova Avaré", "99999-9999", "Preciso de um eletricista", "Necessito de ajuda com a parte eletrica da minha", "");



