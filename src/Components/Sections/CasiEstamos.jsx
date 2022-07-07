import {React, useState} from 'react'
import './Styles/CasiEstamos.scss'
import CasiEstamosTitle from "../../Resources/CasiEstamos.png"
import CasiEstamosLine from "../../Resources/Recurso102.png"
import CasiEstamosAudioWpp from "../../Resources/Recurso103.png"
import CasiEstamosText from "../../Resources/imagenesAudios/yacasiestamosFotoAudio.png"
import CasiEstamosLine2 from "../../Resources/Recurso105.png"
import Audiomp3 from "../../Resources/Audios/yacasiestamosAudio.mp4"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const CasiEstamos = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

  return (
    <div className='CasiEstamosGeneralContainer'>
        
        <div className='CasiEstamosContainer'>
            
            <div className='CasiEstamosTitleContainer'>
                <img src={CasiEstamosTitle} alt=""  className='CasiEstamosTitle'/>
            </div>

            <div className='CasiEstamosLinesAudioTextContainer'>

                { audioOpen ?
                <div className='PlayerCasiEstamosLinesAudioContainer'>

                    <div className='PlayerCasiEstamosLineContainer'>
                        <img src={CasiEstamosLine} alt=""  className='PlayerCasiEstamosLine'/>
                    </div>

                    <div className='PlayerCasiEstamosAudioWppContainer'>
                        <ReactAudioPlayer
                          src={Audiomp3}
                          autoPlay
                          controls
                          className='PlayerCasiEstamosAudioWpp'
                          onEnded={() => closeAudio()}
                        />
                    </div>

                    <div className='PlayerCasiEstamosLine2Container'>
                        <img src={CasiEstamosLine2} alt=""  className='PlayerCasiEstamosLine2'/>
                    </div>

                </div>
                :
                <div className='CasiEstamosLinesAudioContainer'>

                    <div className='CasiEstamosLineContainer'>
                        <img src={CasiEstamosLine} alt=""  className='CasiEstamosLine'/>
                    </div>

                    <div className='CasiEstamosAudioWppContainer'>
                        <img src={CasiEstamosAudioWpp} alt=""  className='CasiEstamosAudioWpp' onClick={() => openAudio()}/>
                    </div>

                    <div className='CasiEstamosLine2Container'>
                        <img src={CasiEstamosLine2} alt=""  className='CasiEstamosLine2'/>
                    </div>

                </div>
                }

                    <div className='CasiEstamosTextContainer'>
                        <img src={CasiEstamosText} alt=""  className='CasiEstamosText'/>
                    </div>

            </div>

        </div>

    </div>
  )
}

export default CasiEstamos