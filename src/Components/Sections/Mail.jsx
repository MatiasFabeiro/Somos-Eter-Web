import React, { useState } from 'react'
import './Styles/Mail.scss'
import MailTitleImg from "../../Resources/Recurso23.png"
import LeftLine1 from "../../Resources/Recurso24.png"
import InfoIcon from "../../Resources/Recurso25.png"
import LeftLine2 from "../../Resources/Recurso28.png"
import MailTextImg from "../../Resources/Recurso26.png"
import MailImg from "../../Resources/Recurso27.png"

const Mail = () => {

const [mailOpen, setMailOpen] = useState(false); 

const openModal = () => {
    setMailOpen(true)
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    setMailOpen(false)
    document.body.style.overflowY = "unset";
}

  return (
    <div className='mailGeneralContainer'>
        
        <div className='mailContainer'>

            <div className='mailTitleContainer'>
                <img src={MailTitleImg} alt="" className='mailTitleImg'/>
            </div>

            <div className='MailInfoContainer'>

                <div className='leftLinesContainer'>
                    <div className='LeftLine1Container'>
                        <img src={LeftLine1} alt="" className='LeftLine1'/>
                    </div>

                    <div className='InfoIconContainer'>
                        <img src={InfoIcon} alt="" className='InfoIcon'/>
                    </div>

                    <div className='LeftLine2Container'>
                        <img src={LeftLine2} alt="" className='LeftLine2'/>
                    </div>
                </div>

                <div className='mailTextAndImgContainer'>
                    <div className='mailTextImgContainer'>
                        <img src={MailTextImg} alt="" className='MailTextImg'/>
                    </div>

                    {
                        mailOpen ?
                        <div className='mailImgPopUpContainer'>
                            <p className='closePopUpMail' onClick={() => closeModal()}>X</p>
                            <img src={MailImg} alt="" className='MailImgPopUp'/>
                        </div>
                        : 
                        <div className='mailImgContainer'>
                            <img src={MailImg} alt="" className='MailImg' onClick={() => openModal()}/>
                        </div>
                    }
                </div>

            </div>

        </div>

    </div>
  )
}

export default Mail