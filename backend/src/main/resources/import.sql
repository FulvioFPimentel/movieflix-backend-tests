INSERT INTO tb_genre (name) VALUES ('ficção cientifica');
INSERT INTO tb_genre (name) VALUES ('Comedia romantica');
INSERT INTO tb_genre (name) VALUES ('Acão');

INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Matrix', 'Reloaded', 1999, 'https://img.discogs.com/ZcaAOZMJ8hCEqOBSroRQEFVAnWw=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-1572706-1229377724.jpeg.jpg', 'Um grande combate contra os programas', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('A Proposta', 'A química entre Reynolds e Bullock', 2009, 'https://institutobernalmeida.com.br/wp-content/uploads/2020/08/aproposta-1-jpg.jpeg', 'Uma historia de amor de um funcionario com sua chefe', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Transformers', 'O Último Cavaleiro', 2017, 'https://titel-kulturmagazin.net/wp-content/uploads/transformers-5.jpg', 'Uma grande batalhar com maquinas alienígenas', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Maze Runner', 'Correr ou Morrer', 2014, 'https://entreterse.com.br/wp-content/uploads/2018/09/maxresdefault-1-1-e1537141619318.jpg', 'Uma corrida pelos labiritos para sobreviver', 1);

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);

INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Filme muito top!', 1, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito top mesmo, super engraçado!', 2, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Sim verdade, bem divertido haha', 1, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Que filme louco mano, legal de mais!', 1, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Esse é de quebrar a cabeça kkk', 2, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Não entendi muito bem.. mas é top os efeitos especiais', 3, 1);
