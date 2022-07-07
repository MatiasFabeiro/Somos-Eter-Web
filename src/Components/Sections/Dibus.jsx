import {React, useState} from 'react'
import "./Styles/Dibus.scss"
import DibusTitleImg from "../../Resources/LosDibus.png"
import DibusTextImg from "../../Resources/Recurso58.png"
import DibusCenterLineImg from "../../Resources/Recurso60.png"
import DibusAudioWppImg from "../../Resources/Recurso61.png"
import DibusTextImg2 from "../../Resources/imagenesAudios/dibusFotoAudio.png"
import DibusCenterLineImg2 from "../../Resources/Recurso63.png"
import DibusComputerImg from "../../Resources/GIFS/dibusGif.gif"
import DibusTextImg3 from "../../Resources/Recurso65.png"
import DibusCenterLineImg3 from "../../Resources/Recurso66.png"
import DibusTextImg4 from "../../Resources/imagenesAudios/dibusFotoAudio2.png"
import DibusAudioWppImg2 from "../../Resources/Recurso68.png"
import DibusCenterLinesInfoImg from "../../Resources/Recurso69.png"
import DibusTextImg5 from "../../Resources/Recurso70.png"
import DibusAudioWppImg3 from "../../Resources/Recurso71.png"
import DibusTextImg6 from "../../Resources/imagenesAudios/dibusFotoAudio3.png"
import DibusWorksImg from "../../Resources/Recurso73.png"
import DibusCenterLineImg4 from "../../Resources/Recurso74.png"
import Audiomp3 from "../../Resources/Audios/losdibusAudio.ogg"
import Audiomp3_2 from "../../Resources/Audios/losdibusAudio2.ogg"
import Audiomp3_3 from "../../Resources/Audios/losdibusAudio3.ogg"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Dibus = () => {

const [dibusOpen, setDibusOpen] = useState(false);

const openModal = () => {
    setDibusOpen(true)
    document.body.style.overflow = "hidden";
}

const closeModal = () => {
    setDibusOpen(false)
    document.body.style.overflowY = "unset";
}

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

const [audioOpen3, setAudioOpen3] = useState(false);

const openAudio3 = () => {
    setAudioOpen3(true);
}

const closeAudio3 = () => {
    setAudioOpen3(false);
}

  return (
    <div className='dibusGeneralContainer'>
        
        <div className='dibusContainer'>

            <div className='DibusTitleImgContainer'>
                <img src={DibusTitleImg} alt="" className='DibusTitleImg'/>
            </div>

            <div className='DibusTextImgContainer'>
                <img src={DibusTextImg} alt="" className='DibusTextImg'/>
            </div>

            <div className='DibusCenterLineImgContainer'>
                <img src={DibusCenterLineImg} alt="" className='DibusCenterLineImg'/>
            </div>

            <div className='DibusAudioAndTextImgContainer'>

                {
                    audioOpen ?
                    <>
                        <div className='DibusSectionPlayerContainer'>
                            <ReactAudioPlayer
                              src={Audiomp3}
                              autoPlay
                              controls
                              className='DibusSectionPlayer'
                              onEnded={() => closeAudio()}
                            />
                        </div>
                        <div className='DibusTextImg2PlayerContainer'>
                            <img src={DibusTextImg2} alt="" className='DibusTextImg2Player'/>
                        </div>
                    </>
                    :
                    <>
                        <div className='DibusAudioWppImgContainer'>
                            <img src={DibusAudioWppImg} alt="" className='DibusAudioWppImg' onClick={() => openAudio()}/>
                        </div>
                        <div className='DibusTextImg2Container'>
                            <img src={DibusTextImg2} alt="" className='DibusTextImg2'/>
                        </div>
                    </>
                }

            </div>

            <div className='DibusCenterLineImg2Container'>
                <img src={DibusCenterLineImg2} alt="" className='DibusCenterLineImg2'/>
            </div>

            <div className='DibusComputerImgContainer'>
                <img src={DibusComputerImg} alt="" className='DibusComputerImg'/>
            </div>

            <div className='DibusTextImg3Container'>
                <img src={DibusTextImg3} alt="" className='DibusTextImg3'/>
            </div>

            <div className='DibusCenterLineImg3Container'>
                <img src={DibusCenterLineImg3} alt="" className='DibusCenterLineImg3'/>
            </div>

            {
                audioOpen2 ?
                <div className='PlayerDibusTextAndAudioImg4'>

                    <div className='PlayerDibusTextImg4Container'>
                        <img src={DibusTextImg4} alt="" className='PlayerDibusTextImg4'/>
                    </div>

                    <div className='PlayerDibusSectionContainer2'>
                        <ReactAudioPlayer
                          src={Audiomp3_2}
                          autoPlay
                          controls
                          className='PlayerDibusSection2'
                          onEnded={() => closeAudio2()}
                        />
                    </div>
                    
                </div> 
                :
                <div className='DibusTextAndAudioImg4'>

                    <div className='DibusTextImg4Container'>
                        <img src={DibusTextImg4} alt="" className='DibusTextImg4'/>
                    </div>

                    <div className='DibusAudioWppImg2Container'>
                        <img src={DibusAudioWppImg2} alt="" className='DibusAudioWppImg2' onClick={() => openAudio2()}/>
                    </div>

                </div>
            }

            <div className='DibusLinesAndInfoImg4'>

                <div className='DibusCenterLinesInfoImgContainer'>
                    <img src={DibusCenterLinesInfoImg} alt="" className='DibusCenterLinesInfoImg'/>
                </div>

                <div className='DibusTextImg5Container'>
                    <img src={DibusTextImg5} alt="" className='DibusTextImg5'/>
                </div>

            </div>

            {

            audioOpen3 ?

            <div className='PlayerDibusAudioTextAndImgContainer'>


                <div className='PlayerDibusAudioWppImg3Container'>
                    <ReactAudioPlayer
                      src={Audiomp3_3}
                      autoPlay
                      controls
                      className='PlayerDibusAudioWppImg3'
                      onEnded={() => closeAudio3()}
                    />
                </div>

                <div className='PlayerDibusTextImg6Container'>
                    <img src={DibusTextImg6} alt="" className='PlayerDibusTextImg6'/>
                </div>

                {
                    dibusOpen ?
                    <>
                        <div className='DibusImgPopUpContainer'>
                            <p className='closePopUpDibus' onClick={() => closeModal()}>X</p>
                            <img src={DibusWorksImg} alt="" className='DibusWorksImgPopUp'/>
                        </div>
                        <div className='DibusWorksImgContainer'>
                            <img src={DibusWorksImg} alt="" className='DibusWorksImg'/>
                        </div>
                    </>
                    : 
                    <div className='DibusWorksImgContainer'>
                        <img src={DibusWorksImg} alt="" className='DibusWorksImg' onClick={() => openModal()}/>
                    </div>
                }

            </div>
            :
            <div className='DibusAudioTextAndImgContainer'>
                        
            <div className='DibusAudioWppImg3Container'>
                <img src={DibusAudioWppImg3} alt="" className='DibusAudioWppImg3' onClick={() => openAudio3()}/>
            </div>
                        
            <div className='DibusTextImg6Container'>
                <img src={DibusTextImg6} alt="" className='DibusTextImg6'/>
            </div>
                        
            {
                dibusOpen ?
                <>
                    <div className='DibusImgPopUpContainer'>
                        <p className='closePopUpDibus' onClick={() => closeModal()}>X</p>
                        <img src={DibusWorksImg} alt="" className='DibusWorksImgPopUp'/>
                    </div>
                    <div className='DibusWorksImgContainer'>
                        <img src={DibusWorksImg} alt="" className='DibusWorksImg'/>
                    </div>
                </>
                : 
                <div className='DibusWorksImgContainer'>
                    <img src={DibusWorksImg} alt="" className='DibusWorksImg' onClick={() => openModal()}/>
                </div>
            }
            
            </div>

            }

            <div className='DibusCenterLineImg4Container'>
                    <img src={DibusCenterLineImg4} alt="" className='DibusCenterLineImg4'/>
            </div>

        </div>

    </div>
  )
}

export default Dibus