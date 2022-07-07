import React from 'react'
//Resources
import ImgPresentacion from "../../Resources/Presentacion.png"
import "./Styles/Presentacion.scss"

const Presentacion = () => {
  return (
    <div className='presentacionContainer'>
        
        <img src={ImgPresentacion} alt="Presentacion Eter" className="imgPresentacion"/>

    </div>
  )
}

export default Presentacion