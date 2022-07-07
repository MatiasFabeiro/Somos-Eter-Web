import {React, useState} from 'react'
import './Styles/Animaciones.scss'
import AnimacionesTitle from '../../Resources/CosasQueSeMueven.png'
import AnimacionesText from '../../Resources/Recurso92.png'
import AnimacionesLine from '../../Resources/Recurso93.png'
import AnimacionesText2 from '../../Resources/imagenesAudios/cositasFotoAudio.png'
import AnimacionesAudioWpp from '../../Resources/Recurso95.png'
import AnimacionesLinesInfo from '../../Resources/Recurso96.png'
import AnimacionesText3 from '../../Resources/Recurso97.png'
import AnimacionesText4 from '../../Resources/Recurso98.png'
import AnimacionesWork from '../../Resources/GIFS/animacionesGif.gif'
import AnimacionesLine2 from '../../Resources/Recurso100.png'
import Audiomp3 from "../../Resources/Audios/animacionesAudio.m4a"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Animaciones = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

  return (
    <div className='AnimacionesGeneralContainer'>
        
        <div className='AnimacionesContainer'>

            <div className='AnimacionesTitleContainer'>
                <img src={AnimacionesTitle} alt="" className='AnimacionesTitle'/>
            </div>

            <div className='AnimacionesTextContainer'>
                <img src={AnimacionesText} alt="" className='AnimacionesText'/>
            </div>

            <div className='AnimacionesTextAudioLineContainer'>
                
                <div className='AnimacionesText2Container'>
                    <img src={AnimacionesText2} alt="" className='AnimacionesText2'/>
                </div>
                
                { audioOpen ?
                <div className='PlayerAnimacionesLineAudioContainer'>
                    
                    <div className='PlayerAnimacionesLineContainer'>
                        <img src={AnimacionesLine} alt="" className='PlayerAnimacionesLine'/>
                    </div>
                    
                    <div className='PlayerAnimacionesAudioWppContainer'>
                        <ReactAudioPlayer
                          src={Audiomp3}
                          autoPlay
                          controls
                          className='PlayerAnimacionesAudioWpp'
                          onEnded={() => closeAudio()}
                        />
                    </div>

                </div>
                :
                <div className='AnimacionesLineAudioContainer'>
                    <div className='AnimacionesLineContainer'>
                        <img src={AnimacionesLine} alt="" className='AnimacionesLine'/>
                    </div>

                    <div className='AnimacionesAudioWppContainer'>
                        <img src={AnimacionesAudioWpp} alt="" className='AnimacionesAudioWpp' onClick={() => openAudio()}/>
                    </div>
                </div>
                }

            </div>

            <div className='AnimacionesInfoLinesTextContainer'>
                
                <div className='AnimacionesLinesInfoContainer'>
                    <img src={AnimacionesLinesInfo} alt="" className='AnimacionesLinesInfo'/>
                </div>

                <div className='AnimacionesText3Container'>
                    <img src={AnimacionesText3} alt="" className='AnimacionesText3'/>
                </div>

            </div>

            <div className='AnimacionesTextWorkContainer'>
                
                <div className='AnimacionesText4Container'>
                    <img src={AnimacionesText4} alt="" className='AnimacionesText4'/>
                </div>

                <div className='AnimacionesWorkContainer'>
                    <img src={AnimacionesWork} alt="" className='AnimacionesWork'/>
                </div>

            </div>

            <div className='AnimacionesLine2Container'>
                <img src={AnimacionesLine2} alt="" className='AnimacionesLine2'/>
            </div>

        </div>

    </div>
  )
}

export default Animaciones