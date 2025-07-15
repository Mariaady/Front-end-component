import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import listPlacesReducer from "../../../components/ListPlacesComponent/ListPlacesReducer";

const reducer = combineReducers({
    loginPageReducer,
    listPlacesReducer
})

export default reducer  