import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Loading from "./Loading";
import Footer from "./Footer";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { allProductsUrl } from "./../urls";
import "../css/Homepage.css";
import "bootstrap/dist/css/bootstrap.css";

function Homepage(props) {
	const { DisplaySetFlex } = props;
	const [state, setState] = useState({ status: undefined });

	//setting NavBar is 'Display'--->flex
	DisplaySetFlex();

	useEffect(() => {
		const allProducts = async () => {
			try {
				let { data, status } = await axios.get(allProductsUrl());

				const { firstArrEle, secondArrEle, thirdArrEle } = splitingArr(data);

				setState({ data, status, firstArrEle, secondArrEle, thirdArrEle });
			} catch (e) {
				alert(e.message);
			}
		};
		allProducts();
	}, []);

	function splitingArr(arr) {
		const firstArrEle = arr.splice(0, 2);
		const secondArrEle = arr.splice(0, 3);
		const thirdArrEle = arr.splice(0, 2);

		return { firstArrEle, secondArrEle, thirdArrEle };
	}

	//destructing state

	const { firstArrEle, secondArrEle, thirdArrEle, status } = state;

	return (
		<>
			{status ? (
				<>
					<Carousel />
					<div className="Homepage ">
						<div className="ItemContainer upperItemContainer ">
							{firstArrEle.map((arg) => (
								<Card key={uuidv4()} {...arg} />
							))}
						</div>
						<div className="ItemContainer middleItemContainer mt-2">
							{secondArrEle.map((arg) => (
								<Card key={uuidv4()} {...arg} />
							))}
						</div>

						<div className="ItemContainer upperItemContainer mt-2 mb-1">
							{thirdArrEle.map((arg) => (
								<Card key={uuidv4()} {...arg} />
							))}
						</div>
					</div>
					<Footer />
				</>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Homepage;
