import HolidayPicture from "../holidayPicture/HolidayPicture"
import { useState, useEffect } from "react"

const HolidayPicturesTable = ({newSelectedDesign}) => {
    const [design, setDesign] = useState('designThree');

    useEffect(() => {
        setDesign(newSelectedDesign);
    }, [newSelectedDesign]);

    console.log('holidaypicturestable', design)
    return(
        <>
            <HolidayPicture selectedDesign={design}/>
        </>
    )
}

export default HolidayPicturesTable