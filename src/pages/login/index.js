import React, { useState, useEffect } from "react";
import LoginComponent from "./Login";
import AuthService from "../../auth/auth.service";
import { useLocation, Redirect } from "react-router-dom";
import { LoadingDefault } from "../../components/loaders/Loader";

const Login = (props) => {
  const [form, setForm] = useState({ user: "", password: "" });
  const [redirectToRef, setRedirectToRef] = useState(false);
  const [expireAt, setExpireAt] = useState(0);
  const [loader, setLoader] = useState(false);

  const { state } = useLocation();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const { user, password } = form;
    AuthService.login(user, password).then(
      (response) => {
        console.log(response);
        if (response.access_token) {
          localStorage.setItem("user", JSON.stringify(response));
          localStorage.setItem("expireAt", JSON.stringify(response.expires_in));
          props.setAuth(true);
          setRedirectToRef(true);
          setLoader(false);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    if (localStorage.user) {
      if (localStorage.expireAt > 100) {
        props.setAuth(true);
        setRedirectToRef(true);
      } else {
        setLoader(true);
        props.setAuth(false);
        setRedirectToRef(false);
        localStorage.removeItem("expireAt");
        AuthService.refreshToken(
          JSON.parse(localStorage.getItem("user")).refresh_token
        )
          .then((response) => {
            if (response) {
              console.log(response);
              setLoader(false);
              localStorage.setItem("user", JSON.stringify(response));
              localStorage.setItem(
                "expireAt",
                JSON.stringify(response.expires_in)
              );
              props.setAuth(true);
              setRedirectToRef(true);
            }
          })
          .catch((e) => {
            console.log(e);
            AuthService.logout();
          });
      }
    } else {
      props.setAuth(false);
      setRedirectToRef(false);
      AuthService.logout();
    }
  }, []);

  // useEffect(() => {
  //   if (localStorage.user) {
  //     AuthService.verify(AuthService.getCurrentUser().accessToken).then(
  //       (response) => {
  //         console.log(response);
  //         if (response === true) {
  //           props.setAuth(true);
  //           setRedirectToRef(true);
  //         } else {
  //           props.setAuth(false);
  //           setRedirectToRef(false);
  //         }
  //       },
  //       (error) => {
  //         console.error(error);
  //         setRedirectToRef(false);
  //       }
  //     );
  //   }
  // }, []);

  const onChange = (e) => {
    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (redirectToRef === true) {
    return <Redirect to={state?.from || "/dashboard"} />;
  }
  if (loader === true) {
    return <LoadingDefault />;
  }

  return (
    <>
      <LoginComponent
        onSubmit={onSubmit}
        onChange={onChange}
        user={form.user}
        password={form.password}
      />
    </>
  );
};

export default Login;
