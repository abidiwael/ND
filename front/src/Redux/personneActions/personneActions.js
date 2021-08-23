import axios from "axios";
import { GET_ALL_PERSONNE_DATA } from "../constants/ActionsTypes";

export const getPersonneData = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/personne/");
		dispatch({ type: GET_ALL_PERSONNE_DATA, payload: res.data.personnes });
	} catch (error) {
		console.log(error);
	}
};

export const addPeronne = (newPerson) => async (dispatch) => {
	try {
		await axios.post("/api/personne/", newPerson);
		dispatch(getPersonneData());
	} catch (error) {
		console.log(error);
	}
};

export const editPersonne = (id, newPersonData) => async (dispatch) => {
	try {
		await axios.put(`/api/personne/${id}`, newPersonData);
		dispatch(getPersonneData());
	} catch (error) {
		console.log(error);
	}
};

export const deletePersonne = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/personne/${id}`);
		dispatch(getPersonneData());
	} catch (error) {
		console.log(error);
	}
};
