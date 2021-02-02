const initalState = { data: [], isCount: true };

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case "GETITEM":
			return { ...state, ...action.res };
		case "NOTFOUNDITEM":
			return { ...state, data: [], error: action.msg, status: action.status };
		case "COUNT":
			console.log(state.isCount);
			return { ...state, isCount: !state.isCount };

		default:
			return state;
	}
};

export default reducer;
