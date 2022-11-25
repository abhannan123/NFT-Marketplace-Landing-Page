import { LOGIN_MODAL, SIGNUP_MODAL, LOGOUT_USER } from "./actionTypees";
export const loginModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_MODAL,
      payload,
    });
  };
};

export const SignupModal = (payload) => {
  return {
    type: SIGNUP_MODAL,
    payload,
  };
};
export const logoutUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_USER,
      payload,
    });
  };
};
