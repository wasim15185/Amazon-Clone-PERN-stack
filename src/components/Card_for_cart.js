import React from "react";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import { deleteFromCartUrl } from "./../urls";
import jwtToken from "./custom_hooks/GetJwtToken";
import { connect } from "react-redux";

const style = makeStyles({
	main: {
		display: "flex",
		justifyContent: "space-between",
		maxHeight: "400px",
		padding: "10px",
		width: "90%",
		marginRight: "auto !important",
		marginLeft: "auto !important",
		marginTop: "5px",
		border: "1px solid #e7e7e7",
		"& button": {
			width: "20%",
			height: "15%",
			fontSize: "85%",
			textAlign: "center",
			backgroundColor: " #f1c75c",
			borderRadius: "3px",
			border: "2.5px solid #f8b303",
		},
		"& ul": {
			listStyle: "none !important",
		},
	},
	c_img: {
		maxWidth: "25%",
		maxHeight: "200px",
	},

	body_amazon_cart: {
		width: "70%",
		maxHeight: "250px",
	},
});

function CardForCart({
	img,
	name,
	price,
	description,
	cart_id,
	setFetch,
	dispatch,
}) {
	const classes = style();
	const { main, c_img, body_amazon_cart } = classes;

	const deleteFromCart = async () => {
		try {
			const { status } = await axios.delete(deleteFromCartUrl(cart_id), {
				headers: { token: jwtToken() },
			});
			if (status === 200) {
				setFetch();
				dispatch({ type: "COUNT" });
				// alert("item deleted");
			}
		} catch (e) {
			setFetch();
			alert(e.message);
		}
	};

	return (
		<div className={main}>
			<img src={img} alt="" className={c_img} />
			<div className={body_amazon_cart}>
				<h5 style={{ padding: "5px" }}>{name}</h5>

				<p style={{ padding: "5px" }}>{description}</p>

				<ul>
					<li>
						Price : $<strong>{price}</strong>
					</li>
				</ul>

				<button onClick={deleteFromCart}>
					<i className="ion-trash-b"> Remove </i>
				</button>
			</div>
		</div>
	);
}

function mapStateToProps(dispatch) {
	return dispatch;
}

export default connect(mapStateToProps)(CardForCart);
