import { LOGIN_MODAL, SIGNUP_MODAL } from "./actionTypees";
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
