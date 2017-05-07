CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
	id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL (10,4) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(id)
);

USE bamazon_DB;

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Taste of the Wild", "pet", "30.00", "50");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Rug Doctor", "household", "6.94", "12");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Domino Sugar", "food", "3.59", "70");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Coke Zero", "beverage", "14.99", "7");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Temptations", "pet", "7.32", "9");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Sapporo", "alcohol", "16.99", "4");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Dawn Dish Soap", "household", "3.49", "30");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Qtip", "beauty", "5.99", "12");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("bananas", "food", "3.99", "11");
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ("Altoids", "food", "2.49", "100");
