var mysql = require("mysql");
var inquirer = require("inquirer");

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


connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {

    for (var i = 0; i < res.length; i++) {
      console.log(" ---------------------------------------------");
      console.log(" Item ID: " + res[i].item_id +
        "\n Product Name: " + res[i].product_name +
        "\n Price: $" + res[i].price +
        "\n In Stock: " + res[i].stock_quantity);
      console.log(" ---------------------------------------------");

    }

    buyProduct();
  });
}

function buyProduct() {
  //Ask customer for id input
  inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the product you would like to buy?',
      validate: function (value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      }
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many would you like to buy?',
      validate: function (value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      }
    }
  ])
    .then(function (answer) {
      connection.query("SELECT stock_quantity FROM products WHERE ?",
        {
          item_id: answer.id
        },
        function (err, res) {
          if (err) throw err;
          if (res[0].stock_quantity >= parseInt(answer.quantity)) {
            connection.query("UPDATE products SET ? WHERE ?",
              [
                {
                  stock_quantity: res[0].stock_quantity - answer.quantity
                },
                {
                  item_id: answer.id
                }
              ],
              function (err) {
                if (err) throw err;
                var resJSON = JSON.stringify(res,null,2);
                var resParsed = JSON.parse(resJSON);
                var itemPrice = resParsed[0].price;
                console.log('Your oder has been placed! Your total is $' + itemPrice * answer.quantity);
              }
            )
          }
          else {
            console.log('Insufficient quantity!');
          }
        }
      )
    });

}
