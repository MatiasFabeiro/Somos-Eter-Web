import {React, useState} from 'react'
import "./Styles/Manifiesto.scss"
import manifiestoTitleImg from "../../Resources/Manifiesto.png"
import manifiestoIconsImg from "../../Resources/Recurso45.png"
import manifiestoTextImg from "../../Resources/Recurso46.png"
import manifiestoAudioWppImg from "../../Resources/Recurso47.png"
import manifiestoTextImg2 from "../../Resources/imagenesAudios/manifiestoFotoAudio.png"
import manifiestoIconsImg2 from "../../Resources/Recurso50.png"
import Audiomp3 from "../../Resources/Audios/manifiestoAudio.ogg"
import manifiestoGif from "../../Resources/GIFS/manifiestoGif.gif"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Manifiesto = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

  return (
    <div className='manifiestoGeneralContainer'>
        
        <div className='manifiestoContainer'>

            <div className='manifiestoTitleImgContainer'>
                <img src={manifiestoTitleImg} alt="" className='manifiestoTitleImg'/>
            </div>

            <div className='manifiestoGifContainer'>
                <img src={manifiestoGif} alt="" className='manifiestoGif'/>
            </div>

            <div className='manifiestoInfoContainer'>

                <div className='manifiestoTextImgContainer'>
                    <img src={manifiestoTextImg} alt="" className='manifiestoTextImg'/>
                </div>
                
                <div className='manifiestoIconsImgContainer'>
                    <img src={manifiestoIconsImg} alt="" className='manifiestoIconsImg'/>
                </div>

            </div>

            <div className='manifiestoInfoContainer2'>

                {
                    audioOpen ?
                    <>
                        <div className='manifiestoSectionPlayerContainer'>
                            <ReactAudioPlayer
                              src={Audiomp3}
                              autoPlay
                              controls
                              className='manifiestoSectionPlayer'
                              onEnded={() => closeAudio()}
                            />
                        </div>
                        <div className='manifiestoPlayerTextImgContainer2'>
                            <img src={manifiestoTextImg2} alt="" className='manifiestoPlayerTextImg2'/>
                        </div>
                    </>
                    :
                    <>
                    <div className='manifiestoAudioWppImgContainer'>
                        <img src={manifiestoAudioWppImg} alt="" className='manifiestoAudioWppImg' onClick={() => openAudio()}/>
                    </div>
                    <div className='manifiestoTextImgContainer2'>
                        <img src={manifiestoTextImg2} alt="" className='manifiestoTextImg2'/>
                    </div>
                    </>
                }
                
            </div>

            <div className='manifiestoIconsImgContainer2'>
                <img src={manifiestoIconsImg2} alt="" className='manifiestoIconsImg2'/>
            </div>

        </div>

    </div>
  )
}

export default Manifiesto