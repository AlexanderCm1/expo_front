import PrivateRoute from "./PrivateRoute";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Login from "../pages/login/index";
import Dashboard from "../pages/dashboard/Dashboard";
import Legajos from "../pages/dashboard/docente/Legajos";
import Layout from "../components/Layout";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setisAuthenticated(boolean);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>

        <Route path="/login">
          <Login setAuth={setAuth} />
        </Route>

        <PrivateRoute path="/dashboard" isAuth={isAuthenticated}>
          <Layout>
            <Dashboard />
          </Layout>
        </PrivateRoute>

        <PrivateRoute path="/legajos/:id" isAuth={isAuthenticated}>
          <Layout>
            <Legajos />
          </Layout>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
