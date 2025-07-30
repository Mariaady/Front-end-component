export const LOAD_PLACES = "LOAD_PLACES";

export const loadPlacesActions = (payload) => {
  return {
    type: LOAD_PLACES,
    payload,
  };
};
