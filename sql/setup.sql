-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS vegetables CASCADE;
DROP TABLE IF EXISTS dictators CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS arnold CASCADE;
DROP TABLE IF EXISTS countries CASCADE;


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
CREATE TABLE arnold (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    movie VARCHAR NOT NULL,
    catchphrase VARCHAR NOT NULL
);
CREATE TABLE countries (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    country VARCHAR NOT NULL,
    capitol VARCHAR NOT NULL,
    langue VARCHAR NOT NULL
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


INSERT INTO 
    arnold (movie, catchphrase)
VALUES
('Kindergarten Cop', 'Its not a toomuh'),
('Commando', 'Stick Around'),
('The Terminator', 'Ill be back'),
('Terminator 2', 'Come with me if you want to live'),
('Batman and Robin', 'Lets kick some ice');

INSERT INTO 
    countries (country, capitol, langue)
VALUES 
('United States', 'Washington DC', 'English'),
('United Kingdom', 'London', 'English'),
('India', 'New Dehli', 'Hindi'),
('Romania', 'Bucharest', 'Romanian'),
('China', 'Beijing', 'Chinese');

