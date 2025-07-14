import { LOGIN, LOAD_INFO } from "./LoginPageActions";

const initialState = {
  user: undefined,
  isOnline: false,
};

const loginPageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload.user,
        isOnline: true,
      };
    case LOAD_INFO:
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};
export default loginPageReducer;
