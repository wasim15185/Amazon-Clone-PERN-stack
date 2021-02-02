import React from "react";
import loadingIcon from "./../loading.svg";
import { makeStyles } from "@material-ui/styles";
const style = makeStyles({
	mainLoading: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",

		"& img": {
			height: "60px",
			width: "60px",
			display: "block",
		},
	},
});

function Loading() {
	const classes = style();
	const { mainLoading } = classes;
	return (
		<div className={mainLoading}>
			<img src={loadingIcon} alt="loading-icon" />
		</div>
	);
}

export default Loading;
