import {React, useState} from 'react'
import './Styles/Reel.scss'
import ReelTitle from '../../Resources/Reel.png'
import CestFiniTitle from '../../Resources/CestFini.png'
import ReelWork from '../../Resources/GIFS/reelGif.gif'
import ReelLine from '../../Resources/Recurso109.png'
import ReelText from '../../Resources/imagenesAudios/reelFotoAudio.png'
import ReelAudioWpp from '../../Resources/Recurso111.png'
import ReelLine2 from '../../Resources/Recurso113.png'
import Audiomp3 from "../../Resources/Audios/reelAudio.mp4"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Reel = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

  return (
    <div className='ReelGeneralContainer'>
        
        <div className='ReelContainer'>
        
            <div className='ReelTitleContainer'>
                <img src={ReelTitle} alt="" className='ReelTitle'/>
            </div>

            <div className='ReelWorkContainer'>
                <img src={ReelWork} alt="" className='ReelWork'/>
            </div>

            <div className='ReelTextLinesAudioContainer'>

                <div className='ReelTextContainer'>
                    <img src={ReelText} alt="" className='ReelText'/>
                </div>

                { audioOpen ?
                <div className='PlayerReelLinesAudioContainer'>

                    <div className='PlayerReelLineContainer'>
                        <img src={ReelLine} alt="" className='PlayerReelLine'/>
                    </div>

                    <div className='PlayerReelAudioWppContainer'>
                        <ReactAudioPlayer
                          src={Audiomp3}
                          autoPlay
                          controls
                          className='PlayerReelAudioWpp'
                          onEnded={() => closeAudio()}
                        />
                    </div>

                    <div className='PlayerReelLine2Container'>
                        <img src={ReelLine2} alt="" className='PlayerReelLine2'/>
                    </div>

                </div>
                :
                <div className='ReelLinesAudioContainer'>

                    <div className='ReelLineContainer'>
                        <img src={ReelLine} alt="" className='ReelLine'/>
                    </div>

                    <div className='ReelAudioWppContainer'>
                        <img src={ReelAudioWpp} alt="" className='ReelAudioWpp' onClick={() => openAudio()}/>
                    </div>

                    <div className='ReelLine2Container'>
                        <img src={ReelLine2} alt="" className='ReelLine2'/>
                    </div>

                </div>
                }
                
            </div>

            <div className='CestFiniTitleContainer'>
                <img src={CestFiniTitle} alt="" className='CestFiniTitle'/>
            </div>

        </div>

    </div>
  )
}

export default Reel