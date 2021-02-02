const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

//importing Pool
const pool = require("../database/pool");

router.get("/products", async (req, res) => {
	try {
		const { rows } = await pool.query("SELECT * FROM products");
		if (rows.length === 0) {
			return res
				.send(501)
				.json("No Products Or Some Problem in Database Server");
		}
		res.json(rows);
	} catch (e) {
		console.error(e.message);
		res.status(501).json("Sever Error");
	}
});

router.get("/products/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const { rows } = await pool.query("SELECT * FROM products WHERE id=$1", [
			id,
		]);

		if (rows.length > 0) {
			res.json(rows[0]);
		} else {
			return res.status(404).json("Item is not Exits");
		}
	} catch (e) {
		console.error(e.message);
		res.status(501).json("Server Error");
	}
});

module.exports = router;
