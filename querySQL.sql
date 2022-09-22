SELECT title FROM recipes ORDER BY title ASC
SELECT * FROM recipes WHERE title LIKE 'Pizza'
CREATE TABLE users (id serial PRIMARY KEY,name VARCHAR(255),email VARCHAR(255),phone VARCHAR(255),password VARCHAR, level INTEGER, gambar VARCHAR)
SELECT * FROM users
INSERT INTO users (name, email, phone, password, level, gambar) VALUES ('Reza Fauzan Akbar','rezafauzanakbar3@gmail.com','085624054622','lentera', 0, 'Reza.jpg')

CREATE TABLE recipes (id serial PRIMARY KEY, gambar VARCHAR,title VARCHAR(225),ingredients VARCHAR(500),video VARCHAR, step VARCHAR, description VARCHAR)
ALTER TABLE recipes ADD step VARCHAR
ALTER TABLE recipes ADD description VARCHAR
SELECT * FROM recipes
<<<<<<< HEAD
INSERT INTO recipes (gambar, title, ingredients, video, step, description) VALUES ('birthday-cake.jpg','Birthday Cake','Terigu, Telor, Mentega, Gula','https://make-birthday-cake.com', 'Sediakan Bahan. Masukkin Bahan. Campurkan Bahan. Panggang Bahan. Kue Birthday Jadi', 'Kue Ulang Tahun Enak')
SELECT step FROM recipes
=======
INSERT INTO recipes (id, photo, title, ingredients, video) VALUES (1,'birthday-cake.jpg','Birthday Cake','Terigu, Telor, Mentega, Gula','https://make-birthday-cake.com')
SELECT step FROM recipes

CREATE TABLE comments (id INTEGER PRIMARY KEY,id_user INTEGER,id_recipes INTEGER, isi_comment VARCHAR)
INSERT INTO comments (id, id_user, id_recipes, isi_comment) VALUES (1, 1, 1, 'Enak banget oi')
SELECT * FROM comments
>>>>>>> e2d7d3d47402c9f06cdbf3d2cd336a8388d8f31b
