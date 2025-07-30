import { combineReducers } from "redux";
import loginPageReducer from "../../../pages/LoginPage/LoginPageReducer";
import listPlacesReducer from "../../../components/ListPlacesComponent/ListPlacesReducer";
import detailPlaceReducer from "../../../components/DetailPlacesComponent/DetailPlacesReducer";

const reducer = combineReducers({
  loginPageReducer,
  listPlacesReducer,
  detailPlaceReducer,
});

export default reducer;
