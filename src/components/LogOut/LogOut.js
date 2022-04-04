import React, {useState, useEffect} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


export const LogOut = () => {
    const [isUserLogged, setIsUserLogged] = useState(true);
    const navigate = useNavigate();
    
    const handleLogOut = () => {
        localStorage.clear();
        setIsUserLogged(false);
    }

    useEffect(() => {
        if (isUserLogged === false) {
            navigate('/login')
        }
    },[isUserLogged])

    return <>
        {localStorage.length > 0 ?
        <button className="nav-link" onClick={handleLogOut}>LogOut</button> :
        <NavLink className="nav-link" to="/login">
            Login
        </NavLink>
        }
    </> 


}