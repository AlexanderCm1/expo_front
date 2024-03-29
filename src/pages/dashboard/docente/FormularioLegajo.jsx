import React, { useEffect, useState } from "react";
import { Factores } from "../../../components/legajos/Legajos";
import Modal from "../../../components/modal/Modal";

import {
  Switch,
  Route,
  useParams,
  withRouter,
  useRouteMatch,
  Link,
} from "react-router-dom";
import UserService from "../../../auth/docente/user.service";
import {LoadingCapitulos} from '../../../components/loaders/Loader'

const FormularioLegajo = () => {
  let { path, url } = useRouteMatch();
  const { id, idcapitulo } = useParams();
  const [factores, setFactores] = useState([]);
  const [factor, setfactor] = useState({
    nombre: undefined,
    id: undefined,
  });
  const [capitulo,setCapitulo] = useState()

  const [isOpen, setIsOpen] = useState(false);
  const [loader,setLoader] = useState(true);

  useEffect(() => {
    UserService.getFactores(idcapitulo)
      .then((response) => {
        console.log(response);
        setFactores(response);
        setLoader(false);
      })
      .catch((e) => console.log(e));


      UserService.getCapituloById(idcapitulo)
      .then(response => {
        setCapitulo(response.noCapitulo)
      }).catch(e => console.log(e));
  }, []);

  const handleFindModal = (nombre, id) => {
    setIsOpen(!isOpen);

    setfactor({ nombre, id });
  };

  if(loader === true){
    return (
      <section className="flex flex-wrap w-9/12 mx-auto my-7 2xl:my-7">
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />
        <LoadingCapitulos />

     
    </section>
    )
  }

  return (
    <>
      <Link to={`/legajos/${id}`} className="p-2 flex bg-yellow-500 text-white w-40 mx-auto justify-center">Volver</Link>
      <h1 className="flex mx-auto w-9/12 m-0 p-0">Te encuentras en  &nbsp;<span className="font-semibold"> {capitulo}</span></h1>
      <section className="flex flex-wrap w-9/12 mx-auto my-7 2xl:my-7">
        {factores.map((val, key) => (
          <Factores
            key={key}
            nombre={val.noFactor}
            image={val.enFoto}
            onClick={() => handleFindModal(val.noFactor, val.id)}
          />
        ))}
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} id={factor.id} nombre = {factor.nombre}/>
    </>
  );
};

export default FormularioLegajo;
