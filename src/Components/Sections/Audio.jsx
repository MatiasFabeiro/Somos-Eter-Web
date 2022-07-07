import {React, useState} from 'react'
import './Styles/Audio.scss'
import AudioTitleImg from '../../Resources/Recurso16.png'
import AudioTextImg from '../../Resources/Recurso17.png'
import AudioTextImg2 from '../../Resources/imagenesAudios/audioFotoAudio.png'
import LeftLineImg1 from '../../Resources/Recurso19.png'
import AudioWppImg from '../../Resources/Recurso21.png'
import LeftLineImg2 from '../../Resources/Recurso22.png'
import Audiomp3 from "../../Resources/Audios/audioEmo.aac"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Audio = () => {

const [audioOpen, setAudioOpen] = useState(false);

const openAudio = () => {
    setAudioOpen(true);
}

const closeAudio = () => {
    setAudioOpen(false);
}

  return (
    <div className='audioGeneralContainer'>

        <div className='audioContainer'>

                <img src={AudioTitleImg} alt="" className='audioTitleImg'/>

            <div className='audioInfoContainer'>

                <div className='AudiotextImgContainer'>

                    <img src={AudioTextImg} alt="" className='AudiotextImg'/>
                    <img src={AudioTextImg2} alt="" className='AudiotextImg2' />

                </div>

                <div className='LeftLineImgContainer'>

                    <div className='AudioIconsImgContainer'>
                        <img src={LeftLineImg1} alt="" className='LeftLineImg1'/>

                        {
                            audioOpen ? 
                            <div className='audioSectionPlayerContainer'>
                                <ReactAudioPlayer
                                  src={Audiomp3}
                                  autoPlay
                                  controls
                                  onEnded={() => closeAudio()}
                                  className='audioSectionPlayer'
                                />
                            </div> 
                            :
                            <div className='audioSectionPlayerContainer2'>
                                <img src={AudioWppImg} alt="" className='AudioWppImg' onClick={() => openAudio()}/>
                            </div> 
                        }

                        <img src={LeftLineImg2} alt="" className='LeftLineImg2'/>
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}  
    
export default Audio


