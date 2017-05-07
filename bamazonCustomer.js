var mysql = require("mysql");
var promptly = require("promptly");
// var db = require("./Bamazon.sql");


 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdqwe',
  port: 3306,
  database: 'bamazon_DB'
});
 
connection.connect(function(err) {
	if (err) throw err;
	console.log(err);
});
 
connection.query("SELECT * FROM products", function(err, resp) {
	for (var i = 0; i < resp.length; i++) {
		console.log("Item ID: " + resp[i].id);
		console.log("Name: " + resp[i].product_name);
		console.log("Department: " + resp[i].department_name);
		console.log("Price: $" + resp[i].price + "\n");
	};

console.log("howdy");

function ID() {
promptly.prompt('What is the ID (1-10) of the product you would like? ', function (err, value) {
    // err is always null in this case, because no validators are set 
//     console.log(value);
	var productID = value;
	console.log(productID);
	buyQuantity();
});
};

function buyQuantity() {
promptly.prompt('How many units of the product they would like to buy?', function (err, value) {
//     // err is always null in this case, because no validators are set 
//     console.log(value);
	var quantity = value;
	console.log(quantity);
// });
});
};



