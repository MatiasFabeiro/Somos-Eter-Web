import {React, useState} from 'react'
import './Styles/Cartita.scss'
import CartitaTitleImg from "./../../Resources/Recurso12.png"
import CartitaLineImg from "./../../Resources/Recurso13.png"
import CartitaTextImg from "./../../Resources/Recurso14.png"
import CartitaImg from "./../../Resources/Recurso15.png"

const Cartita = () => {
    
const [openCartita, setOpenCartita] = useState(false);

const openModal = () => {
    setOpenCartita(true)
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    setOpenCartita(false)
    document.body.style.overflowY = "unset";
}

  return (
    <div className='cartitaGeneralContainer'>
        
        <div className='cartitaContainer'>

            <div className='cartitaTitleImgContainer'>
                <img src={CartitaTitleImg} alt="" className='cartitaTitleImg'/>
            </div>

            <div className='cartitaContainer2'>

                <div className='cartitaLineImgContainer'>
                    <img src={CartitaLineImg} alt="" className='cartitaLineImg'/>
                </div>

                <div className='cartitaTextImgContainer'>
                    <img src={CartitaTextImg} alt="" className='cartitaTextImg'/>
                </div>

                {
                    openCartita ?
                    <div className='cartitaImgPopUpContainer'>
                        <p className='closePopUpCartita' onClick={() => closeModal()}>X</p>
                        <img src={CartitaImg} alt="" className='cartitaImgPopUp'/>
                    </div>
                    : 
                    <div className='cartitaImgContainer'>
                        <img src={CartitaImg} alt="" className='cartitaImg' onClick={() => openModal()}/>
                    </div>
                } 

            </div>

        </div>

    </div>
  )
}

export default Cartita