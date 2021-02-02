import jwtDecode from "jwt-decode";
import token from "./GetJwtToken";

const activeUser = async () => {
	try {
		console.log("i am randing !!");
		const jwt = token();
		const user = jwtDecode(jwt);
		return user;
	} catch (e) {
		return null;
	}
};

export default activeUser;
