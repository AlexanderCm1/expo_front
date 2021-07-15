import React, { useState, useEffect } from "react";
import Points from "../../assets/icons/points.svg";

const Grados = ({ onSubmit, register, select, errors, onChange, getForm }) => {
  const [getFormulario, setGetForm] = useState(false);

  const onClick = () => {
    setGetForm(!getFormulario);
  };

  return (
    <>
      {getFormulario === true ? (
        <>
          <button className="bg-gray-900 w-full" onClick={onClick}>
            volver
          </button>
          <div className="flex flex-col overflow-auto  bg-white cards">
            {getForm.map((val, key) => (
              <div className="w-full flex flex-col  bg-white" key={key}>
                <section className="bg-purple-700 w-full h-auto  items-center">
                  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <p className="text-black flex ">
                      <span className="font-bold">{val.no_abreviatura}</span>
                      <span className="font-mono text-sm">({val.grado})</span>
                    </p>
                    <a href={val.url_archivo} target="_blank" rel="noreferrer">
                      <p class="text-sm text-black flex items-center">
                        <svg
                          class="text-grey w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Archivo
                      </p>
                    </a>

                    <div class="text-black font-bold text-lg mb-2">
                      Nombre de Grado : {val.no_grado}
                    </div>
                    <div class="text-black font-bold text-lg mb-2">
                      centro de estudios : {val.centro_estudios}
                    </div>
                    <div class="flex items-center mx-auto">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={Points}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-black leading-none">Puntos Totales</p>
                        <p class="text-black">{val.in_puntaje}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={onClick} className="bg-gray-800 text-white w-full">
            {" "}
            Ver lista{" "}
          </button>
          <form class="bg-white space-y-6" onSubmit={onSubmit}>
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Grado obtenido</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <select
                    name="iditem"
                    id=""
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    {...register("iditem", {
                      required: true,
                    })}
                  >
                    <option defaultValue value="" hidden>
                      Elige una opcion
                    </option>
                    {select &&
                      select.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.noItem}
                        </option>
                      ))}
                  </select>
                  {errors.iditem && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Nombre del grado</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="nombre_grado"
                    {...register("nombre_grado", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.nombre_grado && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Centro de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="centro_estudios"
                    {...register("centro_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.centro_estudios && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Años</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="años"
                    {...register("años", {
                      required: false,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.años && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Archivo</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    {...register("file", {
                      required: true,
                    })}
                    onChange={onChange}
                  />
                  {errors.file && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  type="submit"
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};
const Titulos = ({ onSubmit, register, select, errors, onChange, getForm }) => {
  const [getFormulario, setGetForm] = useState(false);

  const onClick = () => {
    setGetForm(!getFormulario);
  };

  return (
    <>
      {getFormulario === true ? (
        <>
          <button className="bg-gray-900 w-full" onClick={onClick}>
            volver
          </button>
          <div className="flex flex-col overflow-auto  bg-white cards">
            {getForm.map((val, key) => (
              <div className="w-full flex flex-col  bg-white" key={key}>
                <section className="bg-purple-700 w-full h-auto  items-center">
                  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <p className="text-black flex ">
                      <span className="font-bold">Titulo Profesional</span>
                      {/* <span className="font-mono text-sm">({val.grado})</span> */}
                    </p>
                    <a href={val.url_archivo} target="_blank" rel="noreferrer">
                      <p class="text-sm text-black flex items-center">
                        <svg
                          class="text-grey w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Archivo
                      </p>
                    </a>

                    <div class="text-black font-bold text-lg mb-2">
                      Nombre de Grado : {val.mencion_titulo}
                    </div>
                    <div class="text-black font-bold text-lg mb-2">
                      centro de estudios : {val.centro_estudios}
                    </div>
                    <div class="flex items-center mx-auto">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={Points}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-black leading-none">Puntos Totales</p>
                        <p class="text-black">{val.in_puntaje}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={onClick} className="bg-gray-800 text-white w-full">
            {" "}
            Ver lista{" "}
          </button>
          <form class="bg-white space-y-6" onSubmit={onSubmit}>
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Tipo Titulo</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <select
                    name="iditem"
                    id=""
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    {...register("iditem", {
                      required: true,
                    })}
                  >
                    <option defaultValue value="" hidden>
                      Elige una opcion
                    </option>
                    {select &&
                      select.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.noItem}
                        </option>
                      ))}
                  </select>
                  {errors.iditem && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Mención de titulo</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="mencion_titulo"
                    {...register("mencion_titulo", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.mencion_titulo && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Centro de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="centro_estudios"
                    {...register("centro_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.centro_estudios && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Años</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="años"
                    {...register("años", {
                      required: false,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.años && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Archivo</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    {...register("file", {
                      required: true,
                    })}
                    onChange={onChange}
                  />
                  {errors.file && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  type="submit"
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};
const Especilizacion = ({
  onSubmit,
  register,
  select,
  errors,
  onChange,
  getForm,
  iditem,
  setidItem,
  setValue,
}) => {
  const [getFormulario, setGetForm] = useState(false);

  const onClick = () => {
    setGetForm(!getFormulario);
  };
  useEffect(() => {
    register("creditos", { require: false });
    register("años", { require: false });
  }, []);

  return (
    <>
      {getFormulario === true ? (
        <>
          <button className="bg-gray-900 w-full" onClick={onClick}>
            volver
          </button>
          <div className="flex flex-col overflow-auto  bg-white cards" >
            {getForm.map((val, key) => (
              <div className="w-full flex flex-col  bg-white" key={key}>
                <section className="bg-purple-700 w-full h-auto  items-center">
                  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <p className="text-black flex "></p>
                    <a href={val.url_archivo} target="_blank" rel="noreferrer">
                      <p class="text-sm text-black flex items-center">
                        <svg
                          class="text-grey w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Archivo
                      </p>
                    </a>

                    <div class="text-black font-bold text-lg mb-2">
                      Especialidad : {val.especialidad}
                    </div>
                    <div class="text-black font-bold text-lg mb-2">
                      centro de estudios : {val.centro_estudios}
                    </div>
                    <div class="flex items-center mx-auto">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={Points}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-black leading-none">Puntos Totales</p>
                        <p class="text-black">{val.in_puntaje}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={onClick} className="bg-gray-800 text-white w-full">
            Ver lista
          </button>
          <form class="bg-white space-y-6" onSubmit={onSubmit}>
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">
                Tipo de especialidad / diplomatura
              </h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <select
                    name="iditem"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    {...register("iditem", { required: true })}
                    onChange={(e) => {
                      setidItem(e.target.value);
                    }}
                  >
                    <option defaultValue value="" hidden>
                      Elige una opcion
                    </option>
                    {select &&
                      select.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.noItem}
                        </option>
                      ))}
                  </select>
                  {errors.iditem && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Especialidad</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="especialidad"
                    {...register("especialidad", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.especialidad && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Centro de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="centro_estudios"
                    {...register("centro_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.centro_estudios && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              {iditem === "6" ? (
                <>
                  <h2 className="md:w-1/3 max-w-sm mx-auto">Años</h2>

                  <div className="md:w-2/3 max-w-sm mx-auto">
                    <div className="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                      <input
                        type="text"
                        name="años"
                        onChange={(e) => setValue("años", e.target.value)}
                        className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                      />
                      {errors.años && (
                        <label
                          className="text-left w-full  text-red-600 text-sm font-medium px-5"
                          for=""
                        >
                          Required *
                        </label>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 class="md:w-1/3 max-w-sm mx-auto">Creditos</h2>

                  <div class="md:w-2/3 max-w-sm mx-auto">
                    <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                      <input
                        type="text"
                        name="creditos"
                        onChange={(e) => setValue("creditos", e.target.value)}
                        className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                      />
                      {errors.creditos && (
                        <label
                          className="text-left w-full  text-red-600 text-sm font-medium px-5"
                          for=""
                        >
                          Required *
                        </label>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Archivo</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    {...register("file", {
                      required: true,
                    })}
                    onChange={onChange}
                  />
                  {errors.file && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  type="submit"
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};
const Estudios = ({
  onSubmit,
  register,
  select,
  errors,
  onChange,
  getForm,
  iditem,
  setidItem,
  setValue,
}) => {
  const [getFormulario, setGetForm] = useState(false);

  const onClick = () => {
    setGetForm(!getFormulario);
  };
  useEffect(() => {
    register("creditos", { require: true });
    register("años", { require: true });
  }, []);

  return (
    <>
      {getFormulario === true ? (
        <>
          <button className="bg-gray-900 w-full" onClick={onClick}>
            volver
          </button>
          <div className="flex flex-col overflow-auto  bg-white cards">
            {getForm.map((val, key) => (
              <div className="w-full flex flex-col  bg-white" key={key}>
                <section className="bg-purple-700 w-full h-auto  items-center">
                  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <p className="text-black flex ">{val.pais}</p>
                    <a href={val.url_archivo} target="_blank" rel="noreferrer">
                      <p class="text-sm text-black flex items-center">
                        <svg
                          class="text-grey w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Archivo
                      </p>
                    </a>

                    <div class="text-black font-bold text-lg mb-2">
                      Estudio : {val.no_estudios}
                    </div>
                    <div class="text-black font-bold text-lg mb-2">
                      Centro de estudios : {val.centro_estudios}
                    </div>
                    <div class="flex items-center mx-auto">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={Points}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-black leading-none">Puntos Totales</p>
                        <p class="text-black">{val.in_puntaje}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={onClick} className="bg-gray-800 text-white w-full">
            Ver lista
          </button>
          <form class="bg-white space-y-2" onSubmit={onSubmit}>
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Tipo de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <select
                    name="iditem"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    {...register("iditem", { required: true })}
                    onChange={(e) => {
                      setidItem(e.target.value);
                    }}
                  >
                    <option defaultValue value="" hidden>
                      Elige una opcion
                    </option>
                    {select &&
                      select.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.noItem}
                        </option>
                      ))}
                  </select>
                  {errors.iditem && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Nombre de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="nombre_estudios"
                    {...register("nombre_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.especialidad && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Centro de estudio</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="centro_estudios"
                    {...register("centro_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.centro_estudios && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div class="md:inline-flex space-y-2 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Pais</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="pais"
                    {...register("pais", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.pais && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              {iditem === "15" ? (
                <>
                  <h2 class="md:w-1/3 max-w-sm mx-auto">Creditos</h2>

                  <div class="md:w-2/3 max-w-sm mx-auto">
                    <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                      <input
                        type="text"
                        name="creditos"
                        onChange={(e) => setValue("creditos", e.target.value)}
                        className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                      />
                      {errors.creditos && (
                        <label
                          className="text-left w-full  text-red-600 text-sm font-medium px-5"
                          for=""
                        >
                          Required *
                        </label>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="md:w-1/3 max-w-sm mx-auto">Años</h2>

                  <div className="md:w-2/3 max-w-sm mx-auto">
                    <div className="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                      <input
                        type="text"
                        name="años"
                        onChange={(e) => setValue("años", e.target.value)}
                        className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                      />
                      {errors.años && (
                        <label
                          className="text-left w-full  text-red-600 text-sm font-medium px-5"
                          for=""
                        >
                          Required *
                        </label>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Archivo</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    {...register("file", {
                      required: true,
                    })}
                    onChange={onChange}
                  />
                  {errors.file && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  type="submit"
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};
const Idiomas = ({
  onSubmit,
  register,
  select,
  errors,
  onChange,
  getForm,
  iditem,
  setidItem,
  setValue,
}) => {
  const [getFormulario, setGetForm] = useState(false);

  const onClick = () => {
    setGetForm(!getFormulario);
  };
  return (
    <>
      {getFormulario === true ? (
        <>
          <button className="bg-gray-900 w-full" onClick={onClick}>
            volver
          </button>
          <div className="flex flex-col overflow-auto  bg-white cards">
            {getForm.map((val, key) => (
              <div className="w-full flex flex-col  bg-white" key={key}>
                <section className="bg-purple-700 w-full h-auto  items-center">
                  <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <p className="text-black flex "></p>
                    <a href={val.url_archivo} target="_blank" rel="noreferrer">
                      <p class="text-sm text-black flex items-center">
                        <svg
                          class="text-grey w-3 h-3 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                        </svg>
                        Archivo
                      </p>
                    </a>

                    <div class="text-black font-bold text-lg mb-2">
                      Especialidad : {val.especialidad}
                    </div>
                    <div class="text-black font-bold text-lg mb-2">
                      centro de estudios : {val.centro_estudios}
                    </div>
                    <div class="flex items-center mx-auto">
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={Points}
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div class="text-sm">
                        <p class="text-black leading-none">Puntos Totales</p>
                        <p class="text-black">{val.in_puntaje}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={onClick} className="bg-gray-800 text-white w-full">
            Ver lista
          </button>
          <form class="bg-white space-y-2" onSubmit={onSubmit}>
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Nivel</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <select
                    name="iditem"
                    className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    {...register("iditem", { required: true })}
                    onChange={(e) => {
                      setidItem(e.target.value);
                    }}
                  >
                    <option defaultValue value="" hidden>
                      Elige una opcion
                    </option>
                    {select &&
                      select.map((val, key) => (
                        <option key={key} value={val.id}>
                          {val.noItem}
                        </option>
                      ))}
                  </select>
                  {errors.iditem && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <hr />
            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Idioma</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="idioma"
                    {...register("idioma", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.idioma && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Lengua Materna</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="lengua_materna"
                    {...register("lengua_materna", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.lengua_materna && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div class="md:inline-flex space-y-2 md:space-y-0 w-full p-4 text-gray-500 items-center">
              <h2 class="md:w-1/3 max-w-sm mx-auto">Centro de estudios</h2>

              <div class="md:w-2/3 max-w-sm mx-auto">
                <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                  <input
                    type="text"
                    id=""
                    name="centro_estudios"
                    {...register("centro_estudios", {
                      required: true,
                    })}
                    className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                  />
                  {errors.centro_estudios && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <>
                  <h2 class="md:w-1/3 max-w-sm mx-auto">Unidad</h2>

                  <div class="md:w-2/3 max-w-sm mx-auto">
                    <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                      <input
                        type="text"
                        name="unidad"
                        onChange={(e) => setValue("unidad", e.target.value)}
                        className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                      />
                      {errors.unidad && (
                        <label
                          className="text-left w-full  text-red-600 text-sm font-medium px-5"
                          for=""
                        >
                          Required *
                        </label>
                      )}
                    </div>
                  </div>
                </>
            </div>

            <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-8 text-gray-500 items-center">
              <h2 class="md:w-4/12 max-w-sm mx-auto">Archivo</h2>

              <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
                <div class="w-full inline-flex border-b">
                  <div class="w-1/12 pt-2">
                    <svg
                      fill="none"
                      class="w-6 text-gray-400 mx-auto"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                    {...register("file", {
                      required: true,
                    })}
                    onChange={onChange}
                  />
                  {errors.file && (
                    <label
                      class="text-left w-full  text-red-600 text-sm font-medium px-5"
                      for=""
                    >
                      Required *
                    </label>
                  )}
                </div>
              </div>

              <div class="md:w-3/12 text-center md:pl-6">
                <button
                  type="submit"
                  class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
                >
                  <svg
                    fill="none"
                    class="w-4 text-white mr-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export { Grados, Titulos, Especilizacion, Estudios,Idiomas };
