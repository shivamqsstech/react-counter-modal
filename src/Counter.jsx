import React, { useEffect, useState } from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import './style.css'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [showModal , setShowModal] = useState(false);


const handleDecrement = ()=>{
    setCount((prevCount)=>prevCount-1);
}


const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
};

const handleReset = ()=>{
    setShowModal(true)
}

const confirmReset = ()=>{
    setCount(0);
    setShowModal(false);
}

const cancelReset = ()=>{
    setShowModal(false);
}

 
  return (
    <div>
            <div className='icon'>
                <div>
                <IoMdInformationCircle  className='glyph-icon' />
                </div>
                <div>
                <IoMdSettings  className='glyph-icon' />
                </div>
                <div>
                <GrPowerReset className='glyph-icon' onClick={handleReset}/>
                </div>
            
            </div>


            <div className='buttons' style={{color:"white"}}>
                {
                    count!==0 && (
                        <FiMinus className='action-icon left'  onClick={handleDecrement}/>
                    )
                }
               
                <h1>{count}</h1>

                <FaPlus className='action-icon right' onClick={handleIncrement} />
                
            </div>

            {
                showModal && (

                    <div className="modal-overlay">

                        <div className='modal'>

                            <div className="modal-buttons">
                            <p>Reset Counter ?</p>
                                <div className='btn yes' onClick={confirmReset}>Yes</div>
                                <div className='btn cancel'onClick={cancelReset}>Cancel</div>
                            </div>

                        </div>

                    </div>

                )
            }

    </div>
  )
}

export default Counter;