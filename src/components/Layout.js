import React,{useState} from 'react';
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


    return (
        <>
            <Navbar user={user} onClick={onClick}></Navbar>   
            {children}
        </>
    )
}

export default Layout;