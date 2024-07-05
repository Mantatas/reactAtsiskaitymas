import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUserData } from "../../../services/UserServices";
import { auth, logout } from "../../../services/AuthServices";

const CurrentUser = () => {
    const [userData, setUserData] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user) {
            navigate('/login')
        } 
        getUserData(user, setUserData)
    }, [loading, user]);

    return(
        <ul className="navbar-nav">
            {user? 
                <li className="nav-item dropdown">
                    <a href="" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">{userData.name}</a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={logout}>Atsijungti</li>
                    </ul>
                </li>
            : 
                <>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Prisijungti</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className="nav-link">Registruotis</Link>
                    </li>
                </>
                
            }
        </ul>
    )
}

export default CurrentUser