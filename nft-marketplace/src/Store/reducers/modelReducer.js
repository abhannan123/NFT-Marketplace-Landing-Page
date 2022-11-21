// import { LOGIN_MODAL, SIGNUP_MODAL } from "";
import * as types from "../actions/actionTypees";
export const initialState = {
  isLoginOpen: false,
  isSignUpOpen: false,
};

const modalsReducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  switch (type) {
    case types.LOGIN_MODAL: {
      return { ...state, isLoginOpen: payload };
    }
    case types.SIGNUP_MODAL: {
      return { ...state, isSignUpOpen: payload };
    }

    default:
      return state;
  }
};

export default modalsReducer;
