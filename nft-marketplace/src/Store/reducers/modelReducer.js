// import { LOGIN_MODAL, SIGNUP_MODAL } from "";
import * as types from "../actions/actionTypees";
export const initialState = {
  isLoginOpen: false,
  isSignUpOpen: false,
  isLogout: false,
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
    case types.LOGOUT_USER: {
      return { ...state, isLogout: payload };
    }

    default:
      return state;
  }
};

export default modalsReducer;
