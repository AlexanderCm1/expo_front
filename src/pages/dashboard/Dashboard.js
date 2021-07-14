import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import AuthService from "../../auth/auth.service";
// import "../../styles/comision.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import Docente from "./docente/Docente";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  let [expireAt, setExpireAt] = useState(localStorage.getItem("expireAt"));
  const [user,setUser] = useState({});

  useEffect(() => {
    if(localStorage.expireAt){
      let a = localStorage.getItem("expireAt");
      setUser(AuthService.getCurrentUser());
      let intervalId = setInterval(() => {
        if (a < 1) {
          setExpireAt(a);
          return;
        }
        a = a - 1;
        localStorage.setItem("expireAt", a);
        console.log(a);
      }, 1000);
      return () => clearInterval(intervalId);
    }

  }, []);

  const renderDashboard = {
    ROLE_DOCENTE: () => (
      <>
        <Route exact path={`${path}`}>
          Bienvenido
        </Route>
        <Route exact path={`${path}/participar`}>
          <Docente docente={user.docente}/>
        </Route>
      </>
    ),
    default: () => (
      <>
        <Route exact path={`${path}`}>
          <span>Bienvenido</span>
        </Route>
      </>
    ),
  };

  //   if (AuthService.getCurrentUser().user[0].rol === "Comision") {
  //     return (
  //       <Fragment>
  //         <Navbar user={user} onClick={onClick}></Navbar>
  //         <div className="w-9/12 mx-auto my-7"></div>

  //         <Switch>
  //           <Route exact path={path}>
  //             <span>Bienvenido</span>
  //           </Route>

  //           <Route path={`${path}/concurso`}>
  //             <Comision user={user} />
  //           </Route>
  //         </Switch>
  //       </Fragment>
  //     );
  //   } else if (AuthService.getCurrentUser().user[0].rol === "Docente") {
  //     return (
  //       <>
  //         <Navbar user={user} onClick={onClick}></Navbar>
  //         "Usted esta registrado con el rol Docente"
  //       </>
  //     );
  //   }
  // };

  const render = renderDashboard[AuthService.getCurrentUser().roles[0].nombre]
    ? renderDashboard[AuthService.getCurrentUser().roles[0].nombre]()
    : renderDashboard["default"];

  return render;

  // return (
  //   <>
  //     <Navbar user={user} onClick={onClick}></Navbar>
  //   </>
  // );
};

export default Dashboard;
