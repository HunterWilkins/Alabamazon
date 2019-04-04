# Alabamazon

Alabamazon is a Node spoof of Amazon. No, it's not related to alabama. I just thought it was funny.

Currently, there are only 10 products in the bamazon database.

![GitHub Logo](/Alabamazon-Screenshot.png)
<!-- Format: ![Screenshot](https://raw.githubusercontent.com/HunterWilkins/Alabamazon/master/Alabamazon-Screenshot.png) -->
The program (run by typing node bamaslama.js) gives you a prompt first after showing you the products in the bamazon database. If you select "Yes," then you're asked which product you want to buy and how much of it. It then takes that information and subtracts the quantity selected (if it's less than what's in stock) from the stock quantity.

For ease of implementation, here's the database values:
item_id  product_name                   department_name price   stock_quantity        
1	     The K-for-K-nife	            As Seen on TV	20	    5000
2	     Milk	                        Groceries	    5	    45
3	     Pillsbury Farm Eggs            Groceries	    1	    30
4	     Genericorp Eggs	            Groceries	    5	    40
5	     Bear Repellant	                Outdoors	    15	    1
6	     From Love to Eternity	        Literature	    20	    1
7	     Something Funny and Original	As Seen on TV	900	    0
8	     Biscuits	                    Groceries	    2	    92
9	     Lions	                        Outdoors	    500	    2
10	     Pillsbury Farm Eggs again	    Groceries	    1	    30