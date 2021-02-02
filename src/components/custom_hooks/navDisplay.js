import { useState } from "react";

function useDisplayToggle(initValue) {
	const [display, setDisplay] = useState(initValue);

	const DisplaySetNone = () => {
		if (display === "flex") {
			setDisplay("none");
		}
	};
	const DisplaySetFlex = () => {
		if (display === "none") {
			setDisplay("flex");
		}
	};

	return [display, DisplaySetNone, DisplaySetFlex];
}

export { useDisplayToggle };
