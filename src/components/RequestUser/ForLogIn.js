import axios from "axios";
import { logInUrl } from "./../../urls";

export const reqToLogIn = async (formData) => {
	try {
		const { data } = await axios({
			url: logInUrl(),
			method: "post",
			data: formData,
		});

		return data;
	} catch (e) {
		console.log(e.response);

		if (e.response.status === 401 || e.response.status === 500) {
			alert(e.response.data);
		}
		return;
		// alert()
	}
};
