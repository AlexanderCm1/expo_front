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
import FormularioLegajo from "./FormularioLegajo";
import { LoadingCapitulos } from "../../../components/loaders/Loader";

const Legajos = () => {
  let { path, url } = useRouteMatch();
  const { id } = useParams();

  const [capitulos, setcapitulos] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    UserService.getCapitulos()
      .then((response) => {
        console.log(response);
        setcapitulos(response);
        setLoader(false);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loader === true) {
    return (
      <section className="flex flex-wrap w-9/12 mx-auto my-7 2xl:my-20">
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />
      </section>
    );
  }

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Link
            to={`/dashboard/participar`}
            className="p-2 flex bg-yellow-500 text-white w-40 mx-auto justify-center"
          >
            Regresar
          </Link>
          <section className="flex flex-wrap w-9/12 mx-auto my-7 2xl:my-8">
            {capitulos.map((val, key) => (
              <Capitulos
                key={key}
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
