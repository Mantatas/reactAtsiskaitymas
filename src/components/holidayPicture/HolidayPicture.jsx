import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import * as service from "../../services/CrudServices"
import './HolidayPicture.scss'

const HolidayPicture = ({ selectedDesign }) => {
    const [pictures, setPictures] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    const design = selectedDesign;

    useEffect(() => {
        if (loading) return;
        if (user) {
            service.getAllPictures((pictures) => {
                setPictures(pictures);
            }, user);
        }
    }, [user, loading]);

    const handleDelete = (pictureId) => {
        service.deletePictures(pictureId, user.uid)
            .then(() => {
                setPictures((prevPictures) => prevPictures.filter(picture => picture.id !== pictureId));
            })
            .catch(error => {
                console.error("Error deleting picture: ", error);
            });
    };

    return (
        <div className={`${design}holidayPicsContainer`}>
            {pictures.map((picture, index) => {
                const adjustedIndex = index % 4;
                const imageClass = `${design}holidayPicsContainer__Image${adjustedIndex + 1}`;
                return (
                    <div key={index} className={`${design}holidayPicsContainer__holidayPicture ${imageClass}`}>
                        <img src={picture.picUrl} 
                             alt={`Holiday ${index + 1}`} />
                    </div>
                );
            })}
        </div>
    );
}

export default HolidayPicture;