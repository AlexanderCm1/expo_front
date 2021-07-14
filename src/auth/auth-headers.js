const authAheader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  
    let credentials =
      user && user.accessToken ? {Authorization: "Bearer " + user.accessToken} : {};
  
    return credentials;
  };
  
  export default authAheader;