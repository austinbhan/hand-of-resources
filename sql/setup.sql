-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS vegetables;
DROP TABLE IF EXISTS dictators;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS games;

CREATE TABLE vegetables (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);
CREATE TABLE dictators (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    country VARCHAR NOT NULL
);
CREATE TABLE cities (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    country VARCHAR NOT NULL
);
CREATE TABLE games (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    developer VARCHAR NOT NULL,
    genre VARCHAR NOT NULL
);

INSERT INTO 
    vegetables (name, color)
VALUES
('Potato', 'Brown'),
('Bell Pepper','Red'),
('Carrot','Orange'),
('Onion','Yellow'),
('Kale','Green');

INSERT INTO
    dictators (name, country)
VALUES 
('Josef Tito', 'Yugoslavia'),
('Park Chung Hee', 'South Korea'),
('Mobutu Seko','Zaire'),
('Francisco Franco','Spain'),
('Manuel Noreiga','Panama');

INSERT INTO
    cities (name, country)
VALUES
('London', 'United Kingdom'),
('Berlin', 'Germany'),
('Lisbon', 'Portugal'),
('Cape Town', 'South Africa'),
('Sarajevo', 'Bosnia and Herzegovina');

INSERT INTO 
    games (title, developer, genre)
VALUES 
('X-Com', 'Firaxis', 'Strategy'),
('Frostpunk', '11-bit', 'City building'),
('Call of Duty', 'Infinity Ward', 'FPS'),
('Microsoft Flight Simulator', 'Asobo', 'Simulation'),
('Super Meat Boy', 'Team Meat', 'Platformer');
