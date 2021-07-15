const API_URL = "https://voyage-bastille-18063.herokuapp.com/api/security2/oauth/";

class AuthService {
    async login(username, password) {
      const data = {
        'username':  username,
        'password': password,
        'grant_type': 'password'
       };

       var formBody = [];
       for (var property in data) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(data[property]);
         formBody.push(encodedKey + "=" + encodedValue);
       }

      formBody = formBody.join("&");
      let userapp = 'frontendapp';
      let passapp = "123";

      return await fetch(`${API_URL}token`, {
        method:"POST",
        headers: {
            'Authorization' : 'Basic ' + Buffer.from(userapp + ":" + passapp).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      }).then(res => res.json());
    }
  
    async refreshToken(refresh_token){
      const data = {
        'grant_type': 'refresh_token',
        'refresh_token':  refresh_token,
       };
       var formBody = [];
       for (var property in data) {
         var encodedKey = encodeURIComponent(property);
         var encodedValue = encodeURIComponent(data[property]);
         formBody.push(encodedKey + "=" + encodedValue);
       }
       formBody = formBody.join("&");
       let userapp = 'frontendapp';
       let passapp = "123";
       return await fetch(`${API_URL}token`, {
         method: "POST",
         headers : {
          'Authorization' : 'Basic ' + Buffer.from(userapp + ":" + passapp).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
         },
         body: formBody
       }).then(res => res.json());

    }

    async verify(accessToken) {
   
        return await fetch(`${API_URL}verify`, {
          method: "GET",
          headers: { Authorization: "Bearer " + accessToken },
        }).then((response) => response.json());
  
    }
  
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("expireAt");
    }
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
  
  export default new AuthService();