import React from "react";
import "../css/Login.css";
import { NavLink } from "react-router-dom";
import { reqToLogIn } from "./RequestUser/ForLogIn";

import inputHook from "./custom_hooks/formHook";

function Login(props) {
	const [input, setInput] = inputHook({
		email: "",
		password: "",
	});

	//setting NavBar is 'Display'--->None
	props.DisplaySetNone();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let jwt = await reqToLogIn(input);
		if (jwt) {
			localStorage.setItem("token", jwt);

			const { state } = props.location;

			window.location = state ? state.from.pathname : "/";
		}
		// signupUrl
	};

	return (
		<div className="login-container">
			<form className="login-div">
				<h1>Sign In</h1>
				<div>
					<label htmlFor="email"> Email: </label>

					<input
						type="email"
						name="email"
						value={input.email}
						onChange={setInput}
						required
					/>

					<label htmlFor="password"> Password: </label>

					<input
						type="password"
						name="password"
						value={input.password}
						onChange={setInput}
						required
					/>

					<button onClick={handleSubmit}>submit</button>

					<NavLink to="/signup">go to sing up</NavLink>
				</div>
			</form>
		</div>
	);
}

export default Login;
