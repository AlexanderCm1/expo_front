import React,{useState} from "react";
import imagenConcurso from '../../assets/img/convocatoria.jpg';
import UserService from '../../auth/docente/user.service';
import { Link, useParams, useRouteMatch, useHistory } from "react-router-dom";


const DocenteConcurso = ({fi_guia,fi_bases,fi_req,fe_inicio,fe_fin,ti_modalidad,ti_participacion, id_nomina}) => {
    const history = useHistory();
    const [idlegajo, setIdlegajo] = useState(0);

    const onClick = () => {
        console.log(id_nomina);
        const data = {
            idnomina : id_nomina
        }

        UserService.addLegajo(JSON.stringify(data))
        .then(response => {
           history.push(`/legajos/${response.idlegajos}`)
        }).catch(e => console.log(e))

    }

  return (
      <div className="w-96 m-auto ">
        <div className=" grid grid-cols-3 grid-rows-7 grid-flow-row overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="col-span-3 row-span-4 p-1 m-1">
            <a href="#">
              <img
                src={imagenConcurso}
                alt="Placeholder"
                className="rounded-t-xl object-cover h-48 w-full"
              />
            </a>
          </div>

          <div className="col-span-3 row-span-1">
            <div className="flex align-bottom flex-col leading-none p-2 md:p-4">
              <div className="flex flex-row justify-between items-center">
                <div
                  className="flex items-center no-underline   text-black"
                >
                  <span className="ml-2 text-xl font-bold"> Categorización Docente 2021-I </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 row-span-1">
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                Modalidad: {ti_modalidad}
                <br />
                Participación: {ti_participacion}

              </h1>
              <p className="text-grey-darker text-sm">{fe_inicio} -- {fe_fin}</p>
            </header>
          </div>

          <div className="col-span-3 row-span-1">
            <ul className="flex flex-row pl-2 text-gray-600 overflow-x-scroll hide-scroll-bar">
              <li className="py-1">
                <div className="transition duration-300 ease-in-out rounded-2xl mr-1 px-2 py-1 hover:bg-blue-200 text-gray-500 hover:text-gray-800">
                  <a className="" href="#">
                    {fi_guia}
                  </a>
                  <a className="" href="#">
                    {fi_bases}
                  </a>
                  <a className="" href="#">
                    {fi_req}
                  </a>

                </div>
              </li>
            </ul>
          </div>
          <button onClick={onClick} className="bg-yellow-500 text-white p-2">
              Participar
          </button>
        </div>
      </div>
  );
};


export {DocenteConcurso};