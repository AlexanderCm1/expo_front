import authAheader from "../auth-headers";

const API_URL = "https://voyage-bastille-18063.herokuapp.com/api/";


class UserService {
    
  async getConcurso(co_docente) {
    let headers = new Headers(authAheader());
    return await fetch(`${API_URL}docente2/concurso/${co_docente}`, {
      method: "GET",
      headers: headers,
    }).then((res) => res.json());
  }
  async addLegajo(body) {
    const headers = new Headers(authAheader());
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return await fetch(`${API_URL}docente2/concurso`, {
      method: "POST",
      headers,
      body,
    }).then((res) => res.json());
  }
  async getCapitulos(){
      return await fetch(`${API_URL}legajo2/capitulos`,{
          method: "GET"
      }).then(res => res.json());
  }
  async getCapituloById(id){
      return await fetch(`${API_URL}legajo2/capitulos/${id}`,{
        method: "GET"
      }).then(res => res.json());
  }
  async getFactores(idmodulo){
      return await fetch(`${API_URL}legajo2/capitulos/factores/${idmodulo}`, {
          method:"GET"
      }).then(res => res.json());
  }
  async getItems(idfactor){
    return await fetch(`${API_URL}legajo2/formulario/${idfactor}`,{
      method: "GET"
    }).then(res => res.json());
  }
  async uploadFile(body){
    return await fetch(`${API_URL}file2/upload`, {
      method: "POST",
      body
    }).then(res => res.json());
  }
  async createFormulario(body,idfactor){
    const headers = new Headers(authAheader());
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return await fetch(`${API_URL}legajo2/formulario/${idfactor}`, {
      method: "POST",
      body,
      headers
    }).then(res => res.json());
  }
}

export default new UserService();
