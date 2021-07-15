import React,{useState,useEffect} from 'react';
import Navbar from '../components/navbar/Navbar';
import AuthService from '../auth/auth.service';
import { useHistory } from "react-router-dom";


const Layout = ({children}) => {
    const history = useHistory();
    const [user] = useState(AuthService.getCurrentUser());
    const onClick = (e) => {
      e.preventDefault();
      AuthService.logout();
      history.push("/login");
    };

    useEffect(() => {
        if(localStorage.expireAt){
          let a = localStorage.getItem("expireAt");
        //   setUser(AuthService.getCurrentUser());
          let intervalId = setInterval(() => {
            if (a < 1) {
            //   setExpireAt(a);
              return;
            }
            a = a - 1;
            localStorage.setItem("expireAt", a);
            // console.log(a);
          }, 1000);
          return () => clearInterval(intervalId);
        }
    
      }, []);

    return (
        <>
            <Navbar user={user} onClick={onClick}></Navbar>   
            {children}
        </>
    )
}

export default Layout;