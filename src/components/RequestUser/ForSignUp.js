import axios from "axios";
import { signupUrl } from "./../../urls";

export const reqToApiForSignUp = async (fromData) => {
	try {
		const { data } = await axios({
			method: "post",
			url: signupUrl(),
			data: fromData,
		});
		return data;
	} catch (e) {
		console.log(e.response);
		if ((e.response && e.response.status === 401) || 500) {
			alert(e.response.data);
		}
		return;
	}
};
