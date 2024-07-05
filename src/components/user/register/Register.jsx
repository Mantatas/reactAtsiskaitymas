import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, regWithEmailAndPassword } from "../../../services/AuthServices";

const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (!loading && user) navigate('/')
    }, [loading, user]);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        regWithEmailAndPassword(userData.username, userData.email, userData.password);
        navigate('/')
    };

    return(
        <form className="form container" onSubmit={handleSubmit}>
            <div className="form-group mt-3">
                <input type="text" placeholder="Your username goes here" name="username" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group mt-3">
                <input type="email" placeholder="Your email goes here" name="email" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group mt-3">
                <input type="password" placeholder="Your password goes here" name="password" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-primary">Registruotis</button>
            </div>
            <div className="form-group mt-3">
                <p><Link to="/login">Prisijungti</Link></p>
            </div>
        </form>
    )
}

export default Register