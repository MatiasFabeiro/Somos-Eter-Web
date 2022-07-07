import {React, useState} from 'react'
import "./Styles/Arranca.scss"
import ArrancaTitleImg from "../../Resources/Recurso29.png"
import ArrancaTitleLinesImg from "../../Resources/Recurso30.png"
import ArrancaRightTextImg from "../../Resources/Recurso31.png"
import ArrancaLeftTextImg from "../../Resources/imagenesAudios/arrancaFotoAudio.png"
import ArrancaWppAudioImg from "../../Resources/Recurso33.png"
import ArrancaRightLineImg from "../../Resources/Recurso34.png"
import ArrancaComputerImg from "../../Resources/Recurso36.png"
import ArrancaLeftLineImg from "../../Resources/Recurso37.png"
import ArrancaWppAudioImg2 from "../../Resources/Recurso38.png"
import ArrancaLeftLineImg2 from "../../Resources/Recurso39.png"
import ArrancaComputerText from "../../Resources/Recurso40.png"
import ArrancaComputerText2 from "../../Resources/imagenesAudios/arrancaFotoAudio2.png"
import Audiomp3 from "../../Resources/Audios/arrancaAudio.ogg"
import Audiomp3_2 from "../../Resources/Audios/arrancaAudio2.ogg"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Arranca = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

    const [audioOpen2, setAudioOpen2] = useState(false);

    const openAudio2 = () => {
        setAudioOpen2(true);
    }
    
    const closeAudio2 = () => {
        setAudioOpen2(false);
    }

  return (
    <div className='arrancaGeneralContainer'>
        
        <div className='arrancaContainer'>
            
            <div className='arrancaTitleImgContainer'>
                <img src={ArrancaTitleImg} alt="" className='arrancaTitleImg'/>
            </div>

            <div className='arrancaInfoContainer'>

                <div className='arrancaTitleLinesImgContainer'>
                    <img src={ArrancaTitleLinesImg} alt="" className='arrancaTitleLinesImg'/>
                </div>

                <div className='arrancaRightTextImgContainer'>
                    <img src={ArrancaRightTextImg} alt="" className='arrancaRightTextImg'/>
                </div>

            </div>

            <div className='arrancaInfoContainer2'>

                <div className='arrancaLeftTextImgContainer'>
                    <img src={ArrancaLeftTextImg} alt="" className='arrancaLeftTextImg'/>
                </div>

                {
                    audioOpen ?
                    <div className='arrancaSectionPlayerContainer'>
                        <ReactAudioPlayer
                          src={Audiomp3}
                          autoPlay
                          controls
                          className='arrancaSectionPlayer'
                          onEnded={() => closeAudio()}
                        />
                    </div>
                    :
                    <div className='arrancaWppAudioImgContainer'>
                        <img src={ArrancaWppAudioImg} alt="" className='arrancaWppAudioImg' onClick={() => openAudio()}/>
                    </div>
                }

            </div>

            <div className='arrancaComputerContainer'>

                <div className='arrancaLeftLineImgContainer'>
                    <img src={ArrancaLeftLineImg} alt="" className='arrancaLeftLineImg'/>
                </div>

                <div className='arrancaComputerImgContainer'>
                    <img src={ArrancaComputerImg} alt="" className='arrancaComputerImg'/>
                </div>

                <div className='arrancaRightLineImgContainer'>
                    <img src={ArrancaRightLineImg} alt="" className='arrancaRightLineImg'/>
                </div>

            </div>

            <div className='arrancaInfoContainer3'>

                <div className='arrancaWppAudioAndLeftLineContainer'>

                    {
                        audioOpen2 ?
                        <div className='arrancaSectionPlayer2Container'>
                            <ReactAudioPlayer
                              src={Audiomp3_2}
                              autoPlay
                              controls
                              onEnded={() => closeAudio2()}
                              className='arrancaSectionPlayer2'
                            />
                        </div>
                        :
                        <div className='arrancaWppAudioImg2Container'>
                            <img src={ArrancaWppAudioImg2} alt="" className='arrancaWppAudioImg2' onClick={() => openAudio2()}/>
                        </div>
                    }

                    <div className='arrancaLeftLineImg2Container'>
                        <img src={ArrancaLeftLineImg2} alt="" className='arrancaLeftLineImg2'/>
                    </div>

                </div>

                <div className='arrancaComputerTextAndText2Container'>

                    <div className='arrancaComputerTextContainer'>
                        <img src={ArrancaComputerText} alt="" className='arrancaComputerText'/>
                    </div>

                    <div className='arrancaComputerTextContainer2'>
                        <img src={ArrancaComputerText2} alt="" className='arrancaComputerText2'/>
                    </div>

                </div>

            </div>


        </div>

    </div>
  )
}

export default Arranca