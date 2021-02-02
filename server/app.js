const express = require("express");
const app = express();
const cors = require("cors");

//requiring router
const auth = require("./routes/auth");
const products = require("./routes/products");
const cart = require("./routes/cart");

module.exports = () => {
	//req.body by default express gives us
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	app.use(cors());

	//Routing
	app.use(auth);
	app.use(products);
	app.use(cart);

	return app;
};
