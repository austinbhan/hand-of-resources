-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS vegetables;

CREATE TABLE vegetables (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

INSERT INTO 
    vegetables (name, color)
VALUES
('Potato', 'Brown'),
('Bell Pepper','Red'),
('Carrot','Orange'),
('Onion','Yellow'),
('Kale','Green');