import React from 'react'
import './Styles/queHacemos.scss'
import QueHacemos from "../../Resources/Recurso7.png"
import Text from "../../Resources/Recurso8.png"
import Lines from "../../Resources/Recurso9.png"
import LaPrevia from "../../Resources/Recurso10.png"
import RightLine from "../../Resources/Recurso11.png"

const queHacemos = () => {
  return (
    <div className='queHacemosGeneralContainer'>
        
    <div className='queHacemosSectionContainer'>

        <img src={QueHacemos} alt="" className='queHacemosTitleImg'/>

        <div className='queHacemosSectionContainer2'>

            <div className='queHacemosTextImgContainer'>
                <img src={Text} alt="" className='queHacemosTextImg'/>
            </div>

            <div className='queHacemosLinesImgContainer'>
                <img src={Lines} alt="" className='queHacemosLinesImg'/>
            </div>

        </div>

            <div className='laPreviaImgContainer'>
                <img src={LaPrevia} alt="" className='laPreviaImg'/>
            </div>
            
            <div className='rightLineContainer'>
                <img src={RightLine} alt="" className='rightLine'/>
            </div>

    </div>

    </div>
  )
}

export default queHacemos