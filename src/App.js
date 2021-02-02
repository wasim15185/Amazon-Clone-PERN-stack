import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import OneItemPage from "./components/OneItemPage";
import Cart from "./components/AmazonCart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./App.css";

import { useDisplayToggle } from "./components/custom_hooks/navDisplay";

import activeUser from "./components/custom_hooks/activeUser";

function App() {
	const [user, setUser] = useState({});
	const [display, DisplaySetNone, DisplaySetFlex] = useDisplayToggle("flex");

	useEffect(() => {
		async function getUser() {
			try {
				setUser(await activeUser());
			} catch (e) {}
		}

		getUser();
	}, []);

	return (
		<div className="App">
			<Navbar display={display} />
			<Switch>
				<Route
					exact
					path="/"
					render={(arg) => (
						<Homepage {...arg} DisplaySetFlex={DisplaySetFlex} />
					)}
				/>
				<Route
					exact
					path="/login"
					render={(arg) => <Login {...arg} DisplaySetNone={DisplaySetNone} />}
				/>
				<Route
					exact
					path="/signup"
					render={(arg) => <Signup {...arg} DisplaySetNone={DisplaySetNone} />}
				/>

				<Route
					exact
					path="/:id"
					render={(arg) => (
						<OneItemPage {...arg} DisplaySetFlex={DisplaySetFlex} />
					)}
				/>
				<Route
					exact
					path="/am/cart"
					render={(props) => {
						if (!user) {
							return (
								<Redirect
									to={{
										pathname: "/login",

										state: { from: props.location },
									}}
								/>
							);
						}

						return <Cart {...props} DisplaySetFlex={DisplaySetFlex} />;
					}}
				/>
			</Switch>
		</div>
	);
}

export default App;
