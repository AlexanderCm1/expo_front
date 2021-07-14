import React, { useEffect, useState } from "react";
import { DocenteConcurso } from "../../../components/concurso/Concurso";
import userService from "../../../auth/docente/user.service";


const Docente = ({ docente }) => {
  const [concursos, setConcursos] = useState([]);

  useEffect(() => {
    if (docente) {
      userService
        .getConcurso(docente.coDocente)
        .then((response) => {
            console.log(response)
          setConcursos(response);
        })
        .catch((e) => console.log(e));
    }
  }, [docente]);

  return (
    <section className="my-16 flex flex-wrap">
      {concursos.map((val, key) => (
        <DocenteConcurso
          key={key}
          fi_guia={val.fi_guia}
          fi_bases={val.fi_bases}
          fi_req={val.fi_req}
          fe_inicio={val.fe_inicio}
          fe_fin={val.fe_fin}
          ti_modalidad={val.ti_modalidad}
          ti_participacion={val.ti_participacion}
          id_nomina = {val.id_nomina}
        />
      ))}
    </section>
  );
};

export default Docente;
