var mysql = require("mysql");
// var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "edwardhn",
    database: "bamazon"
  });


  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  
  function afterConnection() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log(" ---------------------------------------------");
        console.log("| Item ID |Product Name | Price | # In Stock |");
        for (var i = 0; i < res.length; i++) {
            console.log("|    " + res[i].item_id + "    |" + res[i].product_name + "|" + res[i].price + "|" + res[i].stock_quantity + "|");
          }
          console.log(" ---------------------------------------------");
      connection.end();
    });
  }