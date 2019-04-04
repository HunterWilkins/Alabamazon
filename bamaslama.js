var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"insert_your_password",
    database: "bamazon"
});

connection.connect(function(){
   start();
   console.log("Thank you, come again!");
   
    
});

function start(){
    console.log("Connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", 
    function(err, res){
        if (err){
            console.log(err);
        }
        else {
            console.table(res);
            inquirer.prompt([
                {
                    type:"list",
                    message:"Would you like to purchase something?",
                    choices:["Yes", "No"],
                    name:"yorn"
                }
            ]).then(function(ans){
                if (ans.yorn === "Yes"){
                    inquirer.prompt([
                        {
                            type: "input",
                            message: "Which product would you like to purchase?",
                            name: "purchase"
                        },
                        {
                            type:"input",
                            message: "How much would you like to buy?",
                            name:"amount"
                        }
                    ]).then(function(answer){
                        depleteStock(answer.purchase, answer.amount);
                    });
                }
                else {
                    connection.end();
                }
            });            
        }
    });
}

function depleteStock(product, amount){
    connection.query(
        "SELECT * FROM products WHERE ?",{product_name : product},
        function(error, response){
            if (error){
                console.log(error);
            }

            if (response[0].stock_quantity > 0){
                var newStock = response[0].stock_quantity - amount;
                connection.query("UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity:newStock
                    },
                    {
                        product_name: product
                    }
                ]);
                console.log("Payment processed.");
                console.log("You've spent $" + response[0].price * amount + " on " + product + ". Hope it was worth it.");
            }
            else {
                console.log("We're out of " + product + "....mow-ron.");
            }
            start();
        });
}