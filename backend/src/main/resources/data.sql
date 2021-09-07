INSERT INTO tb_genre (name) VALUES ('ficção cientifica');
INSERT INTO tb_genre (name) VALUES ('Comedia romantica');
INSERT INTO tb_genre (name) VALUES ('Acão');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Terror');

INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Matrix', 'Reloaded, a grande batalha para proteger o escolhido, aquele que pode nos salvar das sentinelas.', 1999, 'https://img.discogs.com/ZcaAOZMJ8hCEqOBSroRQEFVAnWw=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-1572706-1229377724.jpeg.jpg', 'Após enfrentar os sentinelas no mundo real, Neo, a maior esperança da humanidade, está preso entre a Matrix e a realidade. A maioria da população do planeta permanece em um estado de suspensão da realidade virtual. Os poucos humanos que estão cientes das duras realidades tentam desesperadamente afastar as máquinas a tempo de Neo escapar e salvar o dia. Mas as coisas pioram quando o poderoso programa de computador, Agente Smith, aparece na forma humana.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('A Proposta', 'A química entre Reynolds e Bullock, a historia de amor entre Reynolds e sua chefe.', 2009, 'https://institutobernalmeida.com.br/wp-content/uploads/2020/08/aproposta-1-jpg.jpeg', 'Margaret Tate é uma poderosa editora de livros que corre o risco de ser deportada para o Canadá, seu país natal. Para poder permanecer em Nova York, ela diz estar noiva de Andrew, seu assistente. O jovem aceita ajudá-la, mas impõe algumas condições, entre elas ir para o Alasca e conhecer sua família excêntrica. Com um oficial da imigração sempre à espreita, Margaret e Andrew têm que seguir o plano de casamento apesar de diversos problemas.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Transformers', 'O Último Cavaleiro, a batalhas contra marquinhas alienígenas para salvar o mundo.', 2017, 'https://titel-kulturmagazin.net/wp-content/uploads/transformers-5.jpg', 'O gigante Optimus Prime embarca em uma das missões mais difíceis de sua vida: encontrar, no espaço sideral, os Quintessons, seres que possivelmente são os responsáveis pela criação da raça Transformers. O problema é que, enquanto isso, seus amigos estão precisando de muita ajuda na Terra, já que uma nova ameaça alienígena resolveu destruir toda a humanidade.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Maze Runner', 'Correr ou Morrer, a corrida no labirinto para a sobrevivência ', 2014, 'https://entreterse.com.br/wp-content/uploads/2018/09/maxresdefault-1-1-e1537141619318.jpg', 'Em um futuro, meio apocalíptico, meio utópico, o jovem Thomas é escolhido para enfrentar o sistema. Ao acordar dentro de um escuro elevador em movimento, ele não consegue se lembrar nem de seu nome. Na comunidade isolada em que foi abandonado, ele conhece outros garotos que passaram pelo mesmo. Para conseguir escapar, Thomas precisa descobrir os sombrios segredos guardados em sua mente e correr muito.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Forrest Gump', 'O Contador de Histórias, uma vida de sonhos contado por um sonhador', 1994, 'http://1.bp.blogspot.com/-V4bMw_BZxXU/T4I-fmTgjWI/AAAAAAAABI8/z6YieOX4tn4/s640/Forrest+Gump.jpg', 'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções. Por obra do acaso, ele consegue participar de momentos cruciais, como a Guerra do Vietnã e Watergate, mas continua pensando no seu amor de infância, Jenny Curran.', 4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Espiral', 'O Legado de Jogos Mortais, a sobrevivência depende da união.', 2021, 'https://www.arrobanerd.com.br/wp-content/uploads/2021/04/espiral-novo-dest.jpg', 'Sob o comando do veterano da polícia Marcus (Samuel L. Jackson), o detetive Ezekiel Zeke Banks (Chris Rock) se une ao seu parceiro novato Willem (Max Minghella) para desvendar uma série de assassinatos terríveis que estão acontecendo na cidade. Durante as investigações, Zeke acaba se envolvendo no mórbido jogo do assassino. Classificação indicativa 18 anos, contém drogas, violência extrema e linguagem imprópria.', 5);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Velozes & Furiosos 5', 'Operação Rio,  estamos a penas a uma corrida para a vitória.', 2011, 'https://i.ytimg.com/vi/fWaZpIEO93g/maxresdefault.jpg', 'Dominic Toretto descobre que sua amada Letty foi assassinada e resolve procurar pelo autor do crime. Enquanto isso, o agente Brian OConner está em busca de um traficante de drogas. Eles percebem que talvez procurem a mesma pessoa.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Velozes & Furiosos 3', 'Desafio em Tóquio, a velocidade vai além da honram, corra para sobreviver.', 2006, 'https://images-na.ssl-images-amazon.com/images/I/817SAcsGb1L._AC_SL1400_.jpg', 'Sean Boswell é um piloto de rua que desafia seu rival e bate o carro no fim da corrida. Então, Sean decide se mudar para o Japão em companhia de seu pai para evitar a prisão nos Estados Unidos, já que os rachas não são nada populares com as autoridades. Em Tóquio, ele começa a aprender um excitante e perigoso estilo novo de competir nas ruas. Só que os riscos ficam ainda mais altos quando Sean decide competir com o campeão local e acaba se apaixonando pela namorada dele.', 3);

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Alex', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);

INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Filme muito top!', 3, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Muito top mesmo, super engraçado!', 2, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Sim verdade, bem divertido haha', 3, 2);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Que filme louco mano, legal de mais!', 2, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Esse é de quebrar a cabeça kkk', 2, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Não entendi muito bem.. mas é top os efeitos especiais', 3, 1);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Caraca!.. filme tem ação do começo a o fim!', 3, 3);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Optimus Prime é o cara mesmo em, ou melhor e a máquina mesmo em kkk', 2, 3);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Sim,.. Mas eu curti mais o Bumblebee kkk', 3, 3);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Mano... que filme louco cara.. cada vez que o portão do labirinto abria, meu coração parava O.o', 2, 4);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Pois e, coragem que eles têm para correrem naquele labirinto!', 3, 4);
INSERT INTO tb_review (text, user_id, movie_id) VALUES ('Ótimo filme, parabéns a os produtores!', 3, 5);

