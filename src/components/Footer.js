import React from "react";
import { makeStyles } from "@material-ui/styles";

const style = makeStyles({
	foot: {
		background: "#232f3e",
		width: "100%",
		height: "270px",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "start",
		"& div": {
			marginTop: "3rem",
			color: "#fff",
			width: "15%",
			padding: "7px",
			"& h6": {
				paddingLeft: "2rem",
			},

			"& ul": {
				"& li": {
					listStyle: "none",
					fontSize: "85%",
				},
			},
		},
	},
});

function Footer() {
	const classes = style();
	const { foot } = classes;

	return (
		<footer className={foot}>
			<div>
				<h6>Get To Know Us</h6>
				<ul>
					<li>About</li>
					<li>Career</li>
					<li>Press Release</li>
					<li>Amazon Clone Career</li>
				</ul>
			</div>
			<div>
				<h6>Contact With Us</h6>
				<ul>
					<li>Facebook</li>
					<li>Twitter</li>
					<li>Instagram</li>
				</ul>
			</div>
			<div>
				<h6>Make Money With Us</h6>
				<ul>
					<li>Sell on Amazon</li>
					<li>Sell under Amazon Accelerator</li>
					<li>Become an Affiliate.</li>
					<li>Fulfilment by Amazon</li>
					<li>Advertise Your Products</li>
					<li>Amazon Pay on Merchants</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>
			<div>
				<h6>Let Us Help You</h6>
				<ul>
					<li>COVID-19 and Amazon</li>
					<li>Returns Centre</li>
					<li>100% Purchase Protection</li>
					<li>Fulfilment by Amazon</li>
					<li>Advertise Your Products</li>
					<li>Amazon Pay on Merchants</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
