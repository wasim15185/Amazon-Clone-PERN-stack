import React, { useEffect } from "react";
import "./../css/AmazonCart.css";
import { connect } from "react-redux";
import store from "../redux/store";
import { gettingItems } from "../redux/actionCreator";
import { useToggle } from "./custom_hooks/CustomHook";
import CartCard from "./Card_for_cart";

const OfferImg =
	"https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/HSBCKOTAK_ILM_640x45._CB660775178_.jpg";

function Cart(props) {
	const { data, status, totalPrice, DisplaySetFlex } = props;

	//setting NavBar is 'Display'--->flex
	DisplaySetFlex();

	const [isFetch, setFetch] = useToggle(false);

	useEffect(() => {
		store.dispatch(gettingItems());
	}, [isFetch]);

	return (
		<>
			<div className="Amazon-cart-container">
				<img
					src={OfferImg}
					className="Amazon-cart-container-Img"
					alt="offerImg1"
				/>
				<hr width="95%" className="hr" />

				<div className="Amazon-cart-body">
					<div className="List-amazon-cart">
						{data.map((arg) => (
							<CartCard
								img={arg.img}
								name={arg.name}
								price={arg.price}
								description={arg.description}
								cart_id={arg.id}
								setFetch={setFetch}
							/>
						))}

						<div style={{ width: "90%", margin: "5px 0px" }}>
							{status === 200 && (
								<button
									style={{
										width: "20%",
										float: "right",
										fontSize: "90%",
										textAlign: "center",
										backgroundColor: " #f1b75c",
										borderRadius: "3px",
										border: "2.5px solid #f8b303",
									}}
								>
									Buy Now
								</button>
							)}
						</div>
					</div>

					<div className="Cart-Option">
						<div className="Cart-div">
							<div className="Cart-div-header"></div>
							<div className="Cart-div-body">
								<strong>
									Total : <span>${totalPrice ? totalPrice : 0}</span>
								</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const passingDataReduxToReact = (state) => {
	// console.log(state);
	const { data, status } = state;

	let priceArr;
	let totalPrice;
	if (status) {
		priceArr = data.map((e) => {
			return e.price;
		});

		totalPrice = priceArr.reduce((a, b) => a + b, 0);
	}

	return {
		data,
		status,
		totalPrice,
	};
};

export default connect(passingDataReduxToReact)(Cart);
