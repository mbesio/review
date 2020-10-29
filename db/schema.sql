DROP DATABASE IF EXISTS Groceries;
CREATE DATABASE Groceries;

USE Groceries

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name VARCHAR(50),
  quantity INT,
  PRIMARY KEY (id)
);

INSERT INTO users (name, quantity)
  VALUES ROW('pizza', 2), ROW('beer', 3), ROW('coffee', 5);