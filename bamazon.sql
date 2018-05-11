DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mac Book Pro 15 inch", "Electronics", 2000, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Iphone X", "Electronics", 1200, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Red Bull 8.4 Fl Oz 6 Pack", "Grocery", 40, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Herschel Backpack", "Backpacks", 90, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Air Jordan 1", "Shoes", 120, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike Backpack", "Backpacks", 100, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MSI Gaming Laptop", "Electronics", 2300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Razer Gaming Mouse", "Electronics", 100, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("G Shock Watch", "Watches", 50, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Learn JavaScript & JQuery", "Books", 50, 50);

