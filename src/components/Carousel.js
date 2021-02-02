import React from "react";

import { withStyles } from "@material-ui/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

import img2 from "../img/carousel/img2.jpg";
import img3 from "../img/carousel/img3.jpg";
const img1 =
	"https://images-eu.ssl-images-amazon.com/images/G/31/img19/HeroJan21/Echo_Main_Desktop_1X._CB411088928_.jpg";

const CarouselStyle = {
	imgCarousel: {
		maskImage: "linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0))",
	},
};

function xyz({ classes }) {
	const { imgCarousel } = classes;

	const valClassImage = `d-block w-100 ${imgCarousel}`;

	return (
		<Carousel prevLabel="" nextLabel="" controls={false}>
			<Carousel.Item>
				<img className={valClassImage} src={img1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className={valClassImage} src={img2} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className={valClassImage} src={img3} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}

export default withStyles(CarouselStyle)(xyz);
