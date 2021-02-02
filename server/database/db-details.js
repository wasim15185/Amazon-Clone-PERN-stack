require("dotenv").config();
const { LOCAL_HOST, USER, PASSWORD, DATABASE, DATABASE_PORT } = process.env;

const givingDatabaseData = () => {
	if (process.env.DATABASE_URL) {
		return {
			connectionString: process.env.DATABASE_URL,
			ssl: { rejectUnauthorized: false },
		};
	} else {
		return {
			host: LOCAL_HOST,
			user: USER,
			database: DATABASE,
			password: PASSWORD,
			port: DATABASE_PORT,
		};
	}
};

module.exports = givingDatabaseData();
