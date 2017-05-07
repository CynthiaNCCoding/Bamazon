var mysql = require("mysql");
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
	}
});
