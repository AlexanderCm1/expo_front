import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuth, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={( {location}) => {
        if (isAuth) {
          return children
        } else {
          return (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;