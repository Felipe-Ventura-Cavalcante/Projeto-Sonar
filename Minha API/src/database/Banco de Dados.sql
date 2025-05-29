CREATE DATABASE sonar;
use sonar;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45) UNIQUE,
email VARCHAR(100) UNIQUE,
senha VARCHAR(45),
descricao VARCHAR(150),
dtCriacao_conta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
imagem_perfil TEXT
);

CREATE TABLE post (
idPost INT PRIMARY KEY AUTO_INCREMENT,
quem_postou INT,
descricao TEXT,
dtPostagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
imagem_post TEXT NULL,
CONSTRAINT fkUser_Post
	FOREIGN KEY (quem_postou)
		REFERENCES usuario(idUsuario)
);

CREATE TABLE curtida (
quem_curtiu INT,
post_curtida INT,
quem_postou INT,
dtCurtida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (quem_curtiu, post_curtida, quem_postou),
CONSTRAINT fkUser_curtida
	FOREIGN KEY (quem_curtiu) REFERENCES usuario(idUsuario),
CONSTRAINT fkPost_curtida
    FOREIGN KEY (post_curtida) REFERENCES post(idPost),
CONSTRAINT fkquem_postou
	FOREIGN KEY (quem_postou) REFERENCES post(quem_postou)
);

CREATE TABLE comentario (
idComentario INT AUTO_INCREMENT,
usuario_que_comentou INT,
post_comentado INT,
quem_postou INT,
texto_comentario VARCHAR(200),
dtComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (idComentario, usuario_que_comentou, post_comentado),
CONSTRAINT fkUsuario_comentario
	FOREIGN KEY (usuario_que_comentou)
		REFERENCES usuario(idUsuario),
CONSTRAINT fkpost_comentario
	FOREIGN KEY (post_comentado)
		REFERENCES post(idPost),
CONSTRAINT fkquem_postou_c
	FOREIGN KEY (quem_postou)
		REFERENCES post(quem_postou)
);

CREATE TABLE arquivos (
idArquivo INT auto_increment,
quem_postou INT,
nome VARCHAR(60),
extencao TEXT,
PRIMARY KEY (idArquivo, quem_postou),
CONSTRAINT fkUsuarioQuem_postou
	FOREIGN KEY (quem_postou)
		REFERENCES usuario(idUsuario)
);
select * from arquivos;
select * from usuario;
select * from post;
select * from curtida;
select * from comentario;

INSERT INTO usuario (nome, email, senha, descricao, imagem_perfil) VALUES
('Alice', 'alice@email.com', '1234', 'Usuária ativa', 'perfil_anonimo.jpeg'),
('Bob', 'bob@email.com', '1234', 'Postador casual', 'perfil_anonimo.jpeg'),
('Carlos', 'carlos@email.com', '1234', 'Engajado em curtidas', 'perfil_anonimo.jpeg');

-- Para Alice (idUsuario = 1)
INSERT INTO post (quem_postou, descricao, dtPostagem, imagem_post) VALUES
(1, 'Post semana 1', '2024-04-01', NULL),
(1, 'Post semana 2', '2024-04-08', NULL),
(1, 'Post semana 3', '2024-04-15', NULL),
(1, 'Post semana 4', '2024-04-22', NULL),
(1, 'Post semana 5', '2024-04-29', NULL),
(1, 'Post semana 6', '2024-05-06', NULL);

-- Para Bob (idUsuario = 2)
INSERT INTO post (quem_postou, descricao, dtPostagem, imagem_post) VALUES
(2, 'Post semana 1', '2024-04-02', NULL),
(2, 'Post semana 3', '2024-04-16', NULL),
(2, 'Post semana 5', '2024-04-30', NULL);

-- Para Carlos (idUsuario = 3)
INSERT INTO post (quem_postou, descricao, dtPostagem, imagem_post) VALUES
(3, 'Post único', '2024-04-03', NULL);

-- Carlos curte os posts da Alice nas 6 semanas
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(3, 1, 1, '2024-04-01'),
(3, 2, 1, '2024-04-08'),
(3, 3, 1, '2024-04-15'),
(3, 4, 1, '2024-04-22'),
(3, 5, 1, '2024-04-29'),
(3, 6, 1, '2024-05-06');

-- Bob curte alguns posts aleatórios da Alice
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(2, 1, 1, '2024-04-01'),
(2, 3, 1, '2024-04-15'),
(2, 6, 1, '2024-05-06');

-- Carlos comenta nos posts da Alice semanalmente
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(3, 1, 1, 'Comentário semana 1', '2024-04-01'),
(3, 2, 1, 'Comentário semana 2', '2024-04-08'),
(3, 3, 1, 'Comentário semana 3', '2024-04-15'),
(3, 4, 1, 'Comentário semana 4', '2024-04-22'),
(3, 5, 1, 'Comentário semana 5', '2024-04-29'),
(3, 6, 1, 'Comentário semana 6', '2024-05-06');

-- Bob comenta aleatoriamente
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(2, 2, 1, 'Legal!', '2024-04-08'),
(2, 5, 1, 'Gostei!', '2024-04-29');

-- Alice continua postando semanalmente (já inserido antes)
-- Adicionando mais postagens para Bob e Carlos

-- Bob (id 2) posta mais frequentemente
INSERT INTO post (quem_postou, descricao, dtPostagem, imagem_post) VALUES
(2, 'Post semana 2', '2024-04-09', NULL),
(2, 'Post semana 4', '2024-04-23', NULL),
(2, 'Post semana 6', '2024-05-07', NULL);

-- Carlos (id 3) agora também posta semanalmente
INSERT INTO post (quem_postou, descricao, dtPostagem, imagem_post) VALUES
(3, 'Post semana 1', '2024-04-01', NULL),
(3, 'Post semana 2', '2024-04-08', NULL),
(3, 'Post semana 3', '2024-04-15', NULL),
(3, 'Post semana 4', '2024-04-22', NULL),
(3, 'Post semana 5', '2024-04-29', NULL),
(3, 'Post semana 6', '2024-05-06', NULL);

-- Alice curte os posts do Bob e Carlos
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(1, 7, 2, '2024-04-02'), -- Bob
(1, 9, 2, '2024-04-09'), -- Bob
(1, 13, 3, '2024-04-15'), -- Carlos
(1, 14, 3, '2024-04-22'); -- Carlos

-- Bob curte os posts do Carlos
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(2, 12, 3, '2024-04-08'),
(2, 15, 3, '2024-04-29');

-- Carlos curte os posts do Bob
INSERT INTO curtida (quem_curtiu, post_curtida, quem_postou, dtCurtida) VALUES
(3, 7, 2, '2024-04-02'),
(3, 9, 2, '2024-04-09'),
(3, 11, 2, '2024-04-23'),
(3, 10, 2, '2024-04-16');

-- Alice comenta nos posts do Carlos
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(1, 12, 3, 'Muito bom!', '2024-04-08'),
(1, 14, 3, 'Ótima reflexão!', '2024-04-22');

-- Bob comenta nos posts da Alice
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(2, 4, 1, 'Nice!', '2024-04-22'),
(2, 6, 1, 'Top!', '2024-05-06');

-- Carlos comenta nos posts do Bob
INSERT INTO comentario (usuario_que_comentou, post_comentado, quem_postou, texto_comentario, dtComentario) VALUES
(3, 9, 2, 'Comentando aqui.', '2024-04-09'),
(3, 11, 2, 'Interessante...', '2024-04-23');
