import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import activeUser from "./custom_hooks/activeUser";
import token from "./custom_hooks/GetJwtToken";
import axios from "axios";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { cartCountUrl } from "./../urls";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "../Navbar.css";

const Navbar = (props) => {
	const { display, count } = props;

	const [currentUser, setCurrentUser] = useState({ name: "" });
	const [cartNumber, setCartNumber] = useState(0);

	const searchIconStyle = { fontSize: "1.5rem" };
	useEffect(() => {
		const cartCount = async () => {
			try {
				const { data } = await axios({
					method: "get",
					url: cartCountUrl(),
					headers: {
						token: token(),
					},
				});

				setCartNumber(data.count);
			} catch (e) {
				// alert(e.message);
			}
		};

		cartCount();
	}, [count]);

	useEffect(() => {
		const showCurrentUserAndGettingCartCount = async () => {
			const user = await activeUser();
			setCurrentUser({ ...user });
			try {
				const { data } = await axios({
					method: "get",
					url: cartCountUrl(),
					headers: {
						token: token(),
					},
				});

				setCartNumber(data.count);
			} catch (e) {
				// alert(e.message);
				// console.log("user is not login");
			}
		};

		showCurrentUserAndGettingCartCount();
	}, []);

	return (
		<nav className="container-navbar" style={{ display: display }}>
			<NavLink to="/">
				<img
					src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"
					alt="amazon-logo"
					className="amazon-logo"
				/>
			</NavLink>
			{/* </div> */}

			<div className="search" tabindex="1">
				<input type="text" />
				<button>
					<i className="ion-ios-search-strong" style={searchIconStyle}></i>
				</button>
			</div>

			<div className="options account">
				{currentUser.name ? (
					<small>
						hello, <span>{currentUser.name}</span>
					</small>
				) : (
					<small>
						<Link to="/login">Login</Link>
					</small>
				)}
				<b>account</b>
			</div>
			<div className="options account">
				<small>orders</small>

				<b>&amp; Return</b>
			</div>
			<NavLink to="/am/cart" className="options ForCart">
				<ShoppingCartIcon></ShoppingCartIcon>

				<span>{cartNumber}</span>
			</NavLink>
			{currentUser.name && (
				<div
					className="options"
					style={{ fontSize: "80%" }}
					onClick={() => {
						localStorage.removeItem("token");
						window.location = "/";
					}}
				>
					log out
				</div>
			)}
		</nav>
	);
};

function mapStateToProps(state) {
	const { isCount } = state;

	return {
		count: isCount,
	};
}

export default connect(mapStateToProps)(Navbar);
