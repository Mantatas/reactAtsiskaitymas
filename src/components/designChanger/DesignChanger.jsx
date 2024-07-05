import { useState } from "react"
import './DesignChanger.scss'

const DesignChanger = ({ onDesignChange }) => {
    const [design, setDesign] = useState('designThree')

    const handleChange = (newDesign) => {
        setDesign(newDesign);
        onDesignChange(newDesign)
    }
    return(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Change design
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Choose a design:</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body designChangerGrid">
                            <button onClick={()=>{handleChange('designOne')}}><img src="/images/design1.png"></img></button>
                            <button onClick={()=>{handleChange('designTwo')}}><img src="/images/design2.png"></img></button>
                            <button onClick={()=>{handleChange('designThree')}}><img src="/images/design3.png"></img></button>
                            <button onClick={()=>{handleChange('designFour')}}><img src="/images/design4.png"></img></button>
                            <button onClick={()=>{handleChange('designFive')}}><img src="/images/design5.png"></img></button>
                            <button onClick={()=>{handleChange('designSix')}}><img src="/images/design6.png"></img></button>
                            <button onClick={()=>{handleChange('designSeven')}}><img src="/images/design7.png"></img></button>
                            <button onClick={()=>{handleChange('designEight')}}><img src="/images/design8.png"></img></button>
                            <button onClick={()=>{handleChange('designNine')}}><img src="/images/design9.png"></img></button>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignChanger