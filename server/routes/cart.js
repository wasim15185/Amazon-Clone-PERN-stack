const express = require("express");
const router = express.Router();

//importing MiddleWare
const authMiddleWare = require("./../middleware/authMiddleware");

//importing Pool
const pool = require("../database/pool");

router.post("/cart", [authMiddleWare], async (req, res) => {
	try {
		const { userId, productsId } = req.body;

		const {
			rows,
		} = await pool.query(
			"INSERT INTO carts(user_id,products_id) VALUES($1,$2) RETURNING *;",
			[userId, productsId]
		);

		if (rows.length > 0) {
			res.json(rows[0]);
		} else {
			return res.status(404).json("N0 Item in Carts");
		}
	} catch (e) {
		console.error(e.message);

		res.status(501).json("Sever Error");
	}
});

router.get("/cart/:userId", [authMiddleWare], async (req, res) => {
	try {
		const { userId } = req.params;
		const {
			rows,
		} = await pool.query(
			"SELECT carts.id AS id,user_id,products_id,name,catagory,img,description,price FROM carts JOIN products ON carts.products_id=products.id WHERE user_id=$1",
			[userId]
		);

		if (rows.length > 0) {
			//Remember here i am returing a Array
			res.json(rows).status(200);
		} else {
			return res.status(404).json("N0 Item in Carts");
		}
	} catch (e) {
		console.error(e.message);

		res.status(501).json("Sever Error");
	}
});

router.delete("/cart/delete/:cartId", [authMiddleWare], async (req, res) => {
	try {
		const { cartId } = req.params;

		const {
			rows,
		} = await pool.query("DELETE FROM carts WHERE id=$1 RETURNING * ", [
			cartId,
		]);

		if (rows.length > 0) {
			res.json(rows[0]).status(204).status("Successfully Deleted");
		} else {
			return res.status(404).json("N0T Deleted any items From Carts");
		}
	} catch (e) {
		console.error(e.message);
		res.status(501).json("Sever Error");
	}
});

router.get("/count", [authMiddleWare], async (req, res) => {
	try {
		const { id } = req.user;

		const {
			rows,
		} = await pool.query(
			"SELECT COUNT(user_id) FROM carts JOIN products ON carts.products_id=products.id WHERE user_id=$1 GROUP BY user_id ",
			[id]
		);

		if (rows.length > 0) {
			res.json(rows[0]);
		} else {
			return res.json({ count: 0 });
		}
	} catch (e) {
		console.error(e.message);
		res.status(501).json("Sever Error");
	}
});

module.exports = router;
