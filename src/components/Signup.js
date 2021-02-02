import React from "react";
import "../css/Signup.css";
import { NavLink } from "react-router-dom";
import inputHook from "./custom_hooks/formHook";
import { reqToApiForSignUp } from "./RequestUser/ForSignUp";

function Signup({ DisplaySetNone }) {
	const [input, setInput] = inputHook({
		name: "",
		password: "",
		phone: "",
		email: "",
	});

	DisplaySetNone();

	const handleSubmit = async (e) => {
		e.preventDefault();

		let jwt = await reqToApiForSignUp(input);
		if (jwt) {
			localStorage.setItem("token", jwt);
			// props.history.push("/");
			window.location = "/";
		}
	};

	return (
		<div className="signup-container">
			<form className="signup-div">
				<h1>Sign Up</h1>
				<div>
					<label htmlFor="name"> Name: </label>

					<input
						type="text"
						name="name"
						value={input.name}
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

					<label htmlFor="phone"> Phone no: </label>

					<input
						type="text"
						name="phone"
						value={input.phone}
						onChange={setInput}
					/>

					<label htmlFor="email"> Email: </label>

					<input
						type="email"
						name="email"
						value={input.email}
						onChange={setInput}
						required
					/>

					<button onClick={handleSubmit}>submit</button>

					<NavLink to="/login">go to sing in</NavLink>
				</div>
			</form>
		</div>
	);
}

export default Signup;
