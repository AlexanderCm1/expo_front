import React, { Fragment, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, Controller } from "react-hook-form";
import { Grados } from "../../components/formulario/Formulario";
import UserService from "../../auth/docente/user.service";

const Modal = ({ isOpen, setIsOpen, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
    control,
    setValue,
    setError,
  } = useForm();

  const [select, setSelect] = useState([]);
  const [getform, setGetForm] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    if(id){
      getFormulario();
    }
  }, [id]);

  const getFormulario = () => {

    UserService.getItems(id)
      .then((response) => {
        console.log(response);
        const { select, info } = response;
        setSelect(select);
        setGetForm(info);
      })
      .catch((e) => console.log(e));
  }

  const createFormulario = (data, e) => {
    console.log(data);

    const body = {
      idItem: data.iditem || data.iditemT,
      //grados
      noGrado: data.nombre_grado || undefined,
      //estudios
      nombre_estudios: data.nombre_estudios || undefined,
      creditos: data.creditos || 0,
      pais: data.pais || undefined,
      //titulos
      tipo_titulo: data.tipo_titulo || undefined,
      mencion_titulo: data.mencion_titulo || undefined,
      years: data.años || 0,
      centroEstudios: data.centro_estudios || undefined,
      //especialidad
      especialidad: data.especialidad || undefined,
      //idiomas
      lengua_materna: data.lengua_materna || undefined,
      idioma: data.idioma || undefined,
      unidad: data.unidad || 0,

      urlArchivo: form.url_archivo,
      idsubmodulo: id,
    };
    UserService.createFormulario(JSON.stringify(body), id)
      .then((response) => {
        console.log(response);
        toast.success("✔️ Legajo creado correctamente", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        getFormulario();
        e.target.reset();
        reset();
      })
      .catch((e) => console.log(e));
  };
  const handleOnChangeFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setForm((prevState) => ({ ...prevState, file: undefined }));
      return;
    }

    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      let data = new FormData();
      data.append("file", file);
      console.log(reader.result);
      setForm((prevState) => ({
        ...prevState,
        file: file,
        preview: reader.result,
      }));
      UserService.uploadFile(data).then(
        (response) => {
          const { file_name } = response;
          console.log(response);
          setForm((prevState) => ({
            ...prevState,
            url_archivo: file_name,
          }));
          toast.success("📂 Archivo subido correctamente!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    };
    reader.readAsDataURL(file);
  };

  const renderModal = {
    1: () => (
      <Grados
        select={select}
        getForm={getform}
        register={register}
        errors={errors}
        onChange={handleOnChangeFile}
        onSubmit={handleSubmit(createFormulario)}
      />
    ),
    default: () => (
      <section class="py-5  bg-opacity-50">
      <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
        <div class="bg-indigo-600 p-4 border-t-2  border-indigo-400 rounded-t">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">


              <h1 class="text-white">Grado Acádemico</h1>
            </div>
          </div>
        </div>

            <form class="bg-white space-y-6">
              <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-4 text-gray-500 items-center">
                <h2 class="md:w-1/3 max-w-sm mx-auto">Grado obtenido</h2>

                <div class="md:w-2/3 max-w-sm mx-auto">
                  <div class="w-full inline-flex border pt-2  bg-gray-100 bg-opacity-50">
                    <select
                      name="iditem"
                      id=""
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                    >
                      <option defaultValue value="" hidden>
                        Elige una opcion
                      </option>
                    </select>
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
                      className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                    />
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
                      className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                    />
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
                      className="min-w-full md:w-96 w-full  py-2 px-4 outline-none shadow-md  "
                    />

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
                      className="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"/>
  
                  </div>
                </div>

                <div className="md:w-3/12 text-center md:pl-6">
                  <button
                    type="submit"
                    className="text-white w-full mx-auto max-w-sm rounded-md text-center bg-indigo-400 py-2 px-4 inline-flex items-center focus:outline-none md:float-right"
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
      </div>
    </section>
    ),
  };
  const render = renderModal[id] ? renderModal[id]() : renderModal["default"]();

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      as="div"
      className={`fixed inset-0 z-10 flex justify-center overflow-y-auto ${
        isOpen === true ? "" : ""
      }`}
    >
      <div
        className={`absolute inset-0  z-10 overflow-y-auto  ${
          isOpen ? "bg-gray-600 opacity-50" : ""
        }`}
      ></div>

      <div className="  text-white w-10/12 h-56 text-center opacity-100 z-20">
        <Dialog.Overlay />
        <ToastContainer />
        {/* 
        <Dialog.Title className="text-red-500 text-3xl">
            Deactivate account
        </Dialog.Title>
        <Dialog.Description className="text-xl m-2">
            This will permanently deactivate your account
        </Dialog.Description>

        <p className="text-md m-4">
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
        </p> */}
        {render}

        <button
          className="m-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </Dialog>
  );
};

export default Modal;
