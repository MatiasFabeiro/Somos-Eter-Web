import React from 'react'
import "./Styles/Premisa.scss"
import PremisaLine from "../../Resources/Recurso3.png"
import PremisaTitle from "../../Resources/Recurso4.png"
import PremisaText from "../../Resources/Recurso5.png"
import PremisaLineOut from "../../Resources/Recurso6.png"


const Premisa = () => {

  return (
    <div className="premisaGeneralContainer">

            <div className='premisaLineImgContainer' >
                <img src={PremisaLine} alt="" className='premisaLineImg'/>
            </div>

            <div className='premisaTitleImgContainer'>
                <img src={PremisaTitle} alt="" className='premisaTitleImg'/>
            </div>

            <div className='premisaTextImgContainer'>
                <img src={PremisaText} alt="" className='premisaTextImg' />
            </div>

            <div className='premisaLineOutImgContainer'>
                <img src={PremisaLineOut} alt="" className='premisaLineOutImg'/>
            </div>

    </div>
  )
}

export default Premisa