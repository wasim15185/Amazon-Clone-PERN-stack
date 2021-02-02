const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY_FOR_BCRYPT } = process.env;

module.exports = async (req, res, next) => {
	try {
		const jwtTokenFromClient = req.header("token");

		if (!jwtTokenFromClient) {
			return res.status(403).json("Not Authozied");
		}

		//jwt.verify compair 'token from client' and secretKeyFrom and if 'jwtTokenFromClient' and 'SECRET_KEY_FOR_BCRYPT' matched the its return payload
		const payload = jwt.verify(jwtTokenFromClient, SECRET_KEY_FOR_BCRYPT);

		req.user = payload;
		next();
	} catch (e) {
		console.error(e.message);
		return res.status(403).json("Not Authozied");
	}
};
