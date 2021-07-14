import authAheader from "../auth-headers";

const API_URL = "http://3.85.30.114:8090/api/";


class UserService {
    
  async getConcurso(co_docente) {
    let headers = new Headers(authAheader());
    return await fetch(`${API_URL}docente/concurso/${co_docente}`, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());
  }
  async addLegajo(body) {
    const headers = new Headers(authAheader());
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return await fetch(`${API_URL}docente/concurso`, {
      method: "POST",
      headers,
      body,
    }).then((res) => res.json());
  }
  async getCapitulos(){
      return await fetch(`${API_URL}legajo/capitulos`,{
          method: "GET"
      }).then(res => res.json());
  }
  async getCapituloById(id){
      return await fetch(`${API_URL}legajo/capitulos/${id}`,{
        method: "GET"
      }).then(res => res.json());
  }
  async getFactores(idmodulo){
      return await fetch(`${API_URL}legajo/capitulos/factores/${idmodulo}`, {
          method:"GET"
      }).then(res => res.json());
  }
  async getItems(idfactor){
    return await fetch(`${API_URL}legajo/formulario/${idfactor}`,{
      method: "GET"
    }).then(res => res.json());
  }
  async uploadFile(body){
    return await fetch(`${API_URL}file/upload`, {
      method: "POST",
      body
    }).then(res => res.json());
  }
  async createFormulario(body,idfactor){
    const headers = new Headers(authAheader());
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return await fetch(`${API_URL}legajo/formulario/${idfactor}`, {
      method: "POST",
      body,
      headers
    }).then(res => res.json());
  }
}

export default new UserService();
