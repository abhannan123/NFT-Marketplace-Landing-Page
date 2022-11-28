import React from "react";
import { Navigate } from "react-router-dom";
import { getCookie } from "../cookies/Cookies";
const withUserRoute = (Wcomponent) => {
  const newComponent = () => {
    const user = getCookie("user") && JSON.parse(getCookie("user"));

    if (user) {
      return <Wcomponent />;
    } else {
      return <Navigate replace to={"/"} />;
    }
  };
  return newComponent;
};

export default withUserRoute;
