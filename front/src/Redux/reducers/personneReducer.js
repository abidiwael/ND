import { GET_ALL_PERSONNE_DATA } from "../constants/ActionsTypes";

const initState = {
	personnes: [],
};

const personneReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_ALL_PERSONNE_DATA:
			return { ...state, personnes: payload };
		default:
			return state;
	}
};

export default personneReducer;
