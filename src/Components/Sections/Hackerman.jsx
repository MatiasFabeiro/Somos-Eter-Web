import {React, useState} from 'react'
import './Styles/Hackerman.scss'
import HackermanTitleImg from "../../Resources/ModoHackerman.png"
import HackermanTextImg from "../../Resources/Recurso80.png"
import HackermanLineImg from "../../Resources/Recurso81.png"
import HackermanTextImg2 from "../../Resources/imagenesAudios/hackermanFotoAudio.png"
import HackermanAudioWppImg from "../../Resources/Recurso83.png"
import HackermanLineImg2 from "../../Resources/Recurso84.png"
import HackermanTextImg3 from "../../Resources/Recurso85.png"
import HackermanWorkImg from "../../Resources/GIFS/hackermanGif.gif"
import HackermanLineImg3 from "../../Resources/Recurso87.png"
import HackermanWorkImg2 from "../../Resources/GIFS/hackermanGif2.gif"
import HackermanTextImg4 from "../../Resources/Recurso89.png"
import HackermanLineImg4 from "../../Resources/Recurso90.png"
import Audiomp3 from "../../Resources/Audios/hackermanAudio.m4a"
//Librerias
import ReactAudioPlayer from 'react-audio-player'

const Hackerman = () => {

    const [audioOpen, setAudioOpen] = useState(false);

    const openAudio = () => {
        setAudioOpen(true);
    }
    
    const closeAudio = () => {
        setAudioOpen(false);
    }

  return (
    <div className='hackermanGeneralContainer'>
        
        <div className='hackermanContainer'>

            <div className='HackermanTitleImgContainer'>
                <img src={HackermanTitleImg} alt="" className='HackermanTitleImg'/>
            </div>

            <div className='HackermanTextImgContainer'>
                <img src={HackermanTextImg} alt="" className='HackermanTextImg'/>
            </div>

            <div className='HackermanTextAudioLinesContainer'>

                <div className='HackermanTextImg2Container'>
                    <img src={HackermanTextImg2} alt="" className='HackermanTextImg2'/>
                </div>

                { audioOpen ?
                <div className='PlayerHackermanLinesAndAudioImgContainer'>

                    <div className='PlayerHackermanLineImgContainer'>
                        <img src={HackermanLineImg} alt="" className='PlayerHackermanLineImg'/>
                    </div>

                    <div className='PlayerHackermanAudioWppImgContainer'>
                        <ReactAudioPlayer
                          src={Audiomp3}
                          autoPlay
                          controls
                          className='PlayerHackermanAudioWppImg'
                          onEnded={() => closeAudio()}
                        />
                    </div>

                    <div className='PlayerHackermanLineImg2Container'>
                        <img src={HackermanLineImg2} alt="" className='PlayerHackermanLineImg2'/>
                    </div>

                </div>
                :
                <div className='HackermanLinesAndAudioImgContainer'>

                    <div className='HackermanLineImgContainer'>
                        <img src={HackermanLineImg} alt="" className='HackermanLineImg'/>
                    </div>

                    <div className='HackermanAudioWppImgContainer'>
                        <img src={HackermanAudioWppImg} alt="" className='HackermanAudioWppImg' onClick={() => openAudio()}/>
                    </div>

                    <div className='HackermanLineImg2Container'>
                        <img src={HackermanLineImg2} alt="" className='HackermanLineImg2'/>
                    </div>

                </div>
                }

            </div>

            <div className='HackermanTextWorkContainer'>

                <div className='HackermanTextImg3Container'>
                    <img src={HackermanTextImg3} alt="" className='HackermanTextImg3'/>
                </div>

                <div className='HackermanWorkImgContainer'>
                    <img src={HackermanWorkImg} alt="" className='HackermanWorkImg'/>
                </div>

            </div>

            <div className='HackermanLineImg3Container'>
                <img src={HackermanLineImg3} alt="" className='HackermanLineImg3'/>
            </div>

            <div className='HackermanWorkandTextImg2Container'>

                <div className='HackermanWorkImg2Container'>
                    <img src={HackermanWorkImg2} alt="" className='HackermanWorkImg2'/>
                </div>

                <div className='HackermanTextImg4Container'>
                    <img src={HackermanTextImg4} alt="" className='HackermanTextImg4'/>
                </div>

            </div>

            <div className='HackermanLineImg4Container'>
                <img src={HackermanLineImg4} alt="" className='HackermanLineImg4'/>
            </div>

        </div>

    </div>
  )
}

export default Hackerman