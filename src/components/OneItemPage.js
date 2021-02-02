import React, { useState, useEffect } from "react";
import "../css/OneItem.css";
import axios from "axios";
import { insertInCartUrl, getOneProductUrl } from "./../urls";
import jwtToken from "./custom_hooks/GetJwtToken";
import activeUser from "./custom_hooks/activeUser";
import { connect } from "react-redux";
import Loading from "./Loading";
import Footer from "./Footer";

const OfferImg =
	"https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/HSBCKOTAK_ILM_640x45._CB660775178_.jpg";

function OneItemPage(props) {
	const { match, DisplaySetFlex, dispatch } = props;
	const [currentUser, setCurrentUser] = useState({});

	//setting NavBar is 'Display'--->flex
	DisplaySetFlex();

	const [state, setState] = useState({ status: undefined });

	useEffect(() => {
		const oneProductFetching = async () => {
			setCurrentUser(await activeUser());
			try {
				let { data, status } = await axios.get(
					getOneProductUrl(match.params.id)
				);

				setState({ ...data, status });
			} catch (e) {
				alert(e.message);
			}
		};
		oneProductFetching();
	}, []);

	const { img, name, price, description, status, id } = state;

	const addToCart = async () => {
		try {
			const { id: userid } = await activeUser();

			const { data, status } = await axios.post(
				insertInCartUrl(),
				{
					userId: userid,
					productsId: id,
				},
				{
					headers: {
						token: jwtToken(),
					},
				}
			);

			if (data && status === 200) {
				// alert("item is added");
				dispatch({ type: "COUNT" });
			} else {
				alert("item not add");
			}
		} catch (e) {
			alert(e.message);
		}
	};

	function pleaseLogin() {
		alert("log in plz");
	}

	return (
		<>
			{status ? (
				<>
					<section className="Offer-div">
						<img src={OfferImg} alt="" />
						<hr width="95%" className="hr" />
						<div className="Product-All-Info">
							<img src={img} alt="" className="Product-Img" />
							<div className="Product-Info">
								<h2 className="Product-title">{name}</h2>
								<hr width="95%" className="hr" />
								<ul className="Product-price">
									<li>
										M.R.P: $
										<span
											style={{
												letterSpacing: ".8px",
												textDecoration: "line-through",
											}}
										>
											264598
										</span>
									</li>
									<li>
										Price: $
										<strong style={{ fontSize: "125%" }}>{price}</strong>
									</li>
									<li>You Save: $ {264598 - price}</li>
								</ul>

								<p className="Product-description">{description}</p>
								<ul
									className="Product-description"
									style={{
										listStyle: "none",
										fontWeight: "500",
									}}
								>
									<li style={{ marginTop: "2px" }}>
										sit amet consectetur adipisicing elit.
									</li>
									<li style={{ marginTop: "2px" }}>
										ipsum dolor sit amet consectetur adipisicing.
									</li>
									<li style={{ marginTop: "2px" }}>
										Voluptatum, incidunt? Lorem ipsum dolor sit amet consectetur
									</li>
									<li style={{ marginTop: "2px" }}>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									</li>
								</ul>
							</div>
							<div className="Cart-Option">
								<div className="Cart-div">
									<div className="Cart-div-header"></div>
									<div className="Cart-div-body">
										<button>
											<span>
												<i
													className="ion-ios-cart"
													onClick={() => {
														if (!currentUser) {
															return pleaseLogin();
														} else {
															return addToCart();
														}
													}}
												>
													Add to Cart
												</i>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					<Footer />
				</>
			) : (
				<Loading />
			)}
		</>
	);
}

function mapStateToProps(dispatch) {
	return dispatch;
}

export default connect(mapStateToProps)(OneItemPage);
