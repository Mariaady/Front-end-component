import { LOAD_PLACES } from "./ListPlacesAction";

const initialState = {
  places: [],
};

const listPlacesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PLACES:
      return {
        ...state,
        places: payload.places,
      };
    default:
      return state;
  }
};

export default listPlacesReducer;
