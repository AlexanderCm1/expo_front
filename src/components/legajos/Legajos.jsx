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
    <div className="flex flex-col border bg-cards w-56 h-64 mr-12 my-6">
      <div className="flex flex-col content-center my-7">
        <button onClick={onClick}>

        <picture className="flex items-center justify-center">
          <img src={image} alt="" className="w-28" />
        </picture>
        <span className="font-medium text-white text-center">{nombre}</span>
        </button>

      </div>

      <hr className="bg-yellow-400 border h-9 self-end w-full mt-auto" />
    </div>
  );
};

const Factores = ({nombre,image, onClick}) => {
  return (
    <div className="flex flex-col border bg-cards w-56 h-64 mr-12 my-6">
      <button onClick={onClick} className="cursor-pointer">
      <div className="flex flex-col content-center my-7">
        <picture className="flex items-center justify-center">
          <img src={image} alt="" className="w-28" />
        </picture>
        <span className="font-medium text-white text-center">
          {nombre}
        </span>
      </div>
      </button>
      <hr className="bg-yellow-400 border h-9 self-end w-full mt-auto" />
    </div>
  );
};

export { Capitulos ,Factores};
