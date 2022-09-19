SELECT title FROM recipes ORDER BY title ASC
SELECT * FROM recipes WHERE title LIKE 'Pizza'
CREATE TABLE users (id INTEGER PRIMARY KEY,name VARCHAR(255),email VARCHAR(100),phone VARCHAR(50),password VARCHAR(50))
SELECT * FROM users
INSERT INTO users (id, name, email, phone, password) VALUES (1,'Reza Fauzan Akbar','rezafauzanakbar3@gmail.com','085624054622','lentera')

CREATE TABLE recipes (id INTEGER PRIMARY KEY,photo bytea,title VARCHAR(225),ingredients VARCHAR(500),video bytea)
ALTER TABLE recipes ADD step VARCHAR
ALTER TABLE recipes ADD description VARCHAR
SELECT * FROM recipes
INSERT INTO recipes (id, photo, title, ingredients, video) VALUES (1,'birthday-cake.jpg','Birthday Cake','Terigu, Telor, Mentega, Gula','https://make-birthday-cake.com')
SELECT step FROM recipes

CREATE TABLE comments (id INTEGER PRIMARY KEY,id_user INTEGER,id_recipes INTEGER, isi_comment VARCHAR)
INSERT INTO comments (id, id_user, id_recipes, isi_comment) VALUES (1, 1, 1, 'Enak banget oi')
SELECT * FROM comments