import { act } from "react";
import { LOAD_PLACE, SAVE_PLACE_DETAIL } from "./DetailPlacesAction";

const initialState = {
  placeId: null,
  placeDetail: null,
};

const detailPlaceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PLACE:
      return {
        ...state,
        placeId: payload.placeId,
      };
    case SAVE_PLACE_DETAIL:
      return {
        ...state,
        placeDetail: payload.placeDetail,
      };
    default:
      return state;
  }
};

export default detailPlaceReducer;
