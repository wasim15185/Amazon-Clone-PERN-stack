import React from "react";
import { useHistory } from "react-router-dom";
import "./../css/Card.css";
import "bootstrap/dist/css/bootstrap.css";

function Card({ name, img, price, rating, id }) {
	const history = useHistory();

	const handleClickForRedirect = () => {
		history.push(`/${id}`);
	};

	const getrating = () => {
		const flooredRating = Math.floor(rating);
		const arr = [];
		for (let i = 0; i < flooredRating; i++) {
			arr.push("⭐");
		}

		return arr;
	};

	return (
		<div className="product-card" onClick={handleClickForRedirect}>
			<div className="d-flex flex-column p-3">
				<p>{name}</p>
				<strong>${price}</strong>
				<span>{getrating()}</span>
			</div>
			<img src={img} style={{ padding: "10px", height: "90%" }} alt="img" />
		</div>
	);
}

export default Card;
