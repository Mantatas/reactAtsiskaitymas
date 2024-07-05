import './HolidayPictures.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/AuthServices';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import * as service from "../../services/CrudServices"
import { useNavigate } from 'react-router-dom';
import HolidayPicturesTable from '../holidayPicturesTable/HolidayPicturesTable';
import DesignChanger from '../designChanger/DesignChanger';


const HolidayPictures = ({ onDesignChange }) => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [picData, setPicData] = useState({
        picUrl: "",
        uid: ""
    });
    const [urlError, setUrlError] = useState("");

    if(!user){
        navigate('/login')
    }

    const handleChange = (e) => {
        setPicData({
            ...picData,
            [e.target.name]: e.target.value,
        });
    };

    const validateUrl = (url) => {
        const regex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
        return regex.test(url);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateUrl(picData.picUrl)) {
            setUrlError("Please enter a valid URL.");
            return;
        }
        setUrlError("");
        service.addPictures({
            ...picData,
            uid: user.uid
        });
        navigate('/');
    };

    const [newDesign, setNewDesign] = useState('designThree');

    const changeNewDesign = (changedDesign) => {
        setNewDesign(changedDesign);
    };

    return (
        <main className='d-flex flex-column'>
            <DesignChanger onDesignChange={changeNewDesign} />
            <div className="holidayPics">
                <button type="button" className="holidayPics__addButton" data-bs-toggle="modal" data-bs-target="#addModal">
                    +
                </button>
                <HolidayPicturesTable newSelectedDesign={newDesign} />
            </div>
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addModalLabel">Add New Picture</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form container' onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="picUrl" 
                                    placeholder='Image URL' 
                                    className={`w-100 ${urlError ? 'is-invalid' : ''}`} 
                                    onChange={handleChange} 
                                />
                                {urlError && <div className="invalid-feedback">{urlError}</div>}
                                <button type="submit" className='btn btn-primary mt-2'>Add</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default HolidayPictures;