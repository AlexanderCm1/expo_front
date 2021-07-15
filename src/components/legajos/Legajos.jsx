import React, { useState, useEffect } from "react";
import Academic from "../../assets/icons/academico.svg";
import UserService from '../../auth/docente/user.service';
import {
  Switch,
  Route,
  useParams,
  withRouter,
  useRouteMatch,
  Link,
  useHistory
} from "react-router-dom";

const Capitulos = ({ nombre, image, id }) => {
  const history = useHistory();
  const { path,url } = useRouteMatch();


  const onClick = () => {
      history.push(`${url}/${id}`);

  }

  return (
    <div className="flex flex-col border bg-cards w-56 h-60 mr-12 my-6">
      <div className="flex flex-col content-center mt-5">
        <button onClick={onClick}>
        
        <picture className="flex items-center justify-center mx-auto transition  duration-300 ease-in-out hover:bg-yellow-300 rounded-full w-28 h-28 transform hover:-translate-x hover:scale-110">
          <img src={image} alt="" className="w-20" />
        </picture>
        </button>

      </div>
      <span className="text-sm text-white text-center w-48 mx-auto mt-3 font-serif">{nombre}</span>

      <hr className="bg-yellow-400 border h-6 self-end w-full mt-auto" />
    </div>
  );
};

const Factores = ({nombre,image, onClick}) => {
  return (
    <div className="flex flex-col border bg-cards w-56 h-60 mr-12 my-6">
      <div className="flex flex-col content-center mt-5">
        <button onClick={onClick}>
        
        <picture className="flex items-center justify-center mx-auto transition  duration-300 ease-in-out hover:bg-yellow-300 rounded-full w-28 h-28 transform hover:-translate-x hover:scale-110">
          <img src={image} alt="" className="w-20" />
        </picture>
        </button>

      </div>
      <span className="text-sm text-white text-center w-48 mx-auto mt-3 font-serif">{nombre}</span>

      <hr className="bg-yellow-400 border h-6 self-end w-full mt-auto" />
    </div>
  );
};

export { Capitulos ,Factores};
