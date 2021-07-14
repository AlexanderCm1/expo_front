import React, { useEffect, useState } from "react";
import { DocenteFormulario } from "../../../components/formulario/Formulario";
import {
  Switch,
  Route,
  useParams,
  withRouter,
  useRouteMatch,
  Link,
} from "react-router-dom";
import UserService from "../../../auth/docente/user.service";

import { Capitulos } from "../../../components/legajos/Legajos";
import FormularioLegajo from './FormularioLegajo'

const Legajos = () => {
  let { path, url } = useRouteMatch();
  const { id } = useParams();

  const [capitulos, setcapitulos] = useState([]);

  useEffect(() => {
    UserService.getCapitulos()
      .then((response) => {
        console.log(response);
        setcapitulos(response);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <section className="flex flex-wrap w-9/12 mx-auto my-10">
            {capitulos.map((val, key) => (
              <Capitulos
                nombre={val.noCapitulo}
                image={val.enFoto}
                id={val.id}
              />
            ))}
          </section>
        </Route>

        <Route path={`${path}/:idcapitulo`}>
            <FormularioLegajo />
        </Route>
      </Switch>
    </>
  );
};

export default Legajos;
