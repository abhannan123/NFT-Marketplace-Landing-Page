import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Store/actions/models";
import { removeCookie } from "../cookies/Cookies";
import { Navigate } from "react-router-dom";

function useUserLogout() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser(true));
    removeCookie("user");
    Navigate("/");
    dispatch(logoutUser(false));
  };
  return handleLogout;
}

export default useUserLogout;
