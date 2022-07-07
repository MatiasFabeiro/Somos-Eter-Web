import React from 'react'
import "./Styles/Caja.scss"
import CajaTitleImg from "../../Resources/LaCaja.png"
import CajaTextImg from "../../Resources/Recurso53.png"
//import CajaImg from "../../Resources/Recurso54.png"
import CajaTextImg2 from "../../Resources/Recurso55.png"
import CajaImg2 from "../../Resources/GIFS/laCajaGif.gif"
import CajaIconImg from "../../Resources/Recurso57.png"

const Caja = () => {
  return (
    <div className='CajaGeneralContainer'>
        
        <div className='CajaContainer'>
            
            <div className='cajaTitleImgContainer'>
                <img src={CajaTitleImg} alt="" className='cajaTitleImg'/>
            </div>

            <div className='cajaTextImgContainer'>
                <img src={CajaTextImg} alt="" className='cajaTextImg'/>
            </div>

            <div className='cajaImgContainer'>
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/zDGNGdD9PXA" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className='cajaImg'
                >
                </iframe>
                {/* <img src={CajaImg} alt="" className='cajaImg'/> */}
            </div>

            <div className='cajaTextImgContainer2'>
                <img src={CajaTextImg2} alt="" className='cajaTextImg2'/>
            </div>

            <div className='cajaImgContainer2'>
                <img src={CajaImg2} alt="" className='cajaImg2'/>
            </div>

            <div className='cajaIconImgContainer'>
                <img src={CajaIconImg} alt="" className='cajaIconImg'/>
            </div>

        </div>

    </div>
  )
}

export default Caja