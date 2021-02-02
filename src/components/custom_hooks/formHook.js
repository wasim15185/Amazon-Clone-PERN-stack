import { useState } from "react";

function useFormFields(initialState) {
	const [fields, setValues] = useState(initialState);

	const toggleInput = (event) => {
		// console.log(event.target.name);
		setValues({
			...fields,
			[event.target.name]: event.target.value,
		});
	};

	return [fields, toggleInput];
}

export default useFormFields;
