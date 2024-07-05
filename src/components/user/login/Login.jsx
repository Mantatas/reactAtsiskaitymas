import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, login } from "../../../services/AuthServices";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (!loading && user) navigate ('/')
    }, [user, loading])

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData.email, userData.password)
    }

    return(
        <form className="form container" onSubmit={handleSubmit}>
            <div className="form-group mt-3">
                <input type="email" placeholder="ur email" name="email" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group mt-3">
                <input type="password" placeholder="ur passwd" name="password" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary">Log in</button>
            </div>
            <div className="form-group mt-3">
                <p><Link to="/register">Registruotis</Link></p>
            </div>
        </form>
    )
}

export default Login