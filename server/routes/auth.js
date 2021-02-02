const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//importing Pool
const pool = require("../database/pool");

// importing jwt-generator
const jwtGenerator = require("../utils/jwt-generator");

//registering

router.post("/signup", async (req, res) => {
	try {
		const { name, email, password, phone } = req.body;

		if (!name || !email || !password) {
			return res.status(401).json("plzz fill up from correctly");
		}

		//1. checking the user is already exits or not

		const user = await pool.query("SELECT *  FROM users WHERE email=$1 ", [
			email,
		]);

		//1.1 if exits then send a message 'user exit'  and also send the code
		if (user.rows.length !== 0) {
			return res.status(401).json("User is Already Exits");
		}

		//2. bcrypt the password (means generating hash and salt)
		const saltRounds = 10;

		const hashAndSaltPassword = await bcrypt.hashSync(password, saltRounds);

		//2. saving user details into 'postgres'
		const {
			rows,
		} = await pool.query(
			"INSERT INTO users(name, email,password, phone) VALUES($1,$2,$3,$4) RETURNING *",
			[name, email, hashAndSaltPassword, phone]
		);

		//3. creating token
		const token = await jwtGenerator({
			id: rows[0].id,
			name: rows[0].name,
			email: rows[0].email,
		});
		//4. sending the token as a response
		res.json(token);
	} catch (e) {
		console.error(e.message);

		res.status(500).json(e.message);
	}
});

// log in Routes

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(401).json("Please Fill Info");
		}

		//1. check if user dosn't exits (if not then send a error)
		const user = await pool.query("SELECT *  FROM users WHERE email=$1 ", [
			email,
		]);

		if (user.rows.length === 0) {
			return res.status(401).json("User doesn't exits");
		}

		//2.check if user inputed password is same as the database password

		const isValidPassword = await bcrypt.compare(
			password,
			user.rows[0].password
		);

		// +------------------------------------------------+
		// |	'isValidPassword' gives us a Boolean Value |
		// +----------------------------------------------+

		if (!isValidPassword) {
			return res.status(401).json("Password is Incorrect");
		}

		//3. creating token

		const { rows } = user;

		const token = await jwtGenerator({
			id: rows[0].id,
			name: rows[0].name,
			email: rows[0].email,
		});

		//4. sending the token as a response
		res.json(token);
	} catch (e) {
		console.error(e.message);
		res.status(500).send("Server problem ");
	}
});

module.exports = router;
