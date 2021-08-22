import { combineReducers } from "redux";
import personneReducer from "./personneReducer";


const rootReducer = combineReducers({
    personneReducer,
});

export default rootReducer;
