const app = require("./app")();
require("dotenv").config();
var path = require("path");
const { PORT } = process.env;

//requiring Database info
const dbDetails = require("./database/db-details");
//importing Pool
const pool = require("./database/pool");

//requiring production
//const creatingTableForProduction = require("./database/production");

pool
	.connect(dbDetails)
	.then(() => {
		console.log("> Postgres connected ");
		// 'Server' is listening Here
		app.listen(PORT, () => {
			console.log(`> Express server is running at ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
// Database connection End

app.get("/", (req, res) => {
	res.send("okk");
});

// app.get("/login", (req, res) => {});

// app.post("/login", (req, res) => {});

// app.get("/singup", (req, res) => {});

// app.post("/signup", () => {});
