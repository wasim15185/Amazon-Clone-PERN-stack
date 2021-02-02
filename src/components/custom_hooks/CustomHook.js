import { useState } from "react";

function useToggle(initialValue) {
	const [state, setState] = useState(initialValue);

	const toggle = () => {
		setState(!state);
	};

	return [state, toggle];
}

export { useToggle };
