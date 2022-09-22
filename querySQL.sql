SELECT title FROM recipes ORDER BY title ASC
SELECT * FROM recipes WHERE title LIKE 'Pizza'
CREATE TABLE users (id serial PRIMARY KEY,name VARCHAR(255),email VARCHAR(255),phone VARCHAR(255),password VARCHAR, level INTEGER, gambar VARCHAR)
SELECT * FROM users
INSERT INTO users (name, email, phone, password, level, gambar) VALUES ('Reza Fauzan Akbar','rezafauzanakbar3@gmail.com','085624054622','lentera', 0, 'Reza.jpg')

CREATE TABLE recipes (id serial PRIMARY KEY, gambar VARCHAR,title VARCHAR(225),ingredients VARCHAR(500),video VARCHAR, step VARCHAR, description VARCHAR)
ALTER TABLE recipes ADD step VARCHAR
ALTER TABLE recipes ADD description VARCHAR
SELECT * FROM recipes
INSERT INTO recipes (gambar, title, ingredients, video, step, description) VALUES ('birthday-cake.jpg','Birthday Cake','Terigu, Telor, Mentega, Gula','https://make-birthday-cake.com', 'Sediakan Bahan. Masukkin Bahan. Campurkan Bahan. Panggang Bahan. Kue Birthday Jadi', 'Kue Ulang Tahun Enak')
SELECT step FROM recipes