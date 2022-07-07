import React from 'react'
import "./Home.scss"
//Components
import Presentacion from './Sections/Presentacion'
import Nosotros from "./Sections/Nosotros"
import Premisa from "./Sections/Premisa"
import QueHacemos from "./Sections/queHacemos"
import Cartita from "./Sections/Cartita"
import Audio from "./Sections/Audio"
import Mail from "./Sections/Mail"
import Arranca from "./Sections/Arranca"
import Manifiesto from "./Sections/Manifiesto"
import Caja from "./Sections/Caja"
import Dibus from "./Sections/Dibus"
import Hackerman from "./Sections/Hackerman"
import Animaciones from "./Sections/Animaciones"
import CasiEstamos from "./Sections/CasiEstamos"
import Reel from "./Sections/Reel"

const Home = () => {

  document.body.style.overflowX = "hidden";

  return (
    <div>

        <Presentacion/>
        <Nosotros/>
        <Premisa/>
        <QueHacemos/>
        <Cartita/>
        <Audio/>
        <Mail/>
        <Arranca/>
        <Manifiesto/>
        <Caja/>
        <Dibus/>
        <Hackerman/>
        <Animaciones/>
        <CasiEstamos/>
        <Reel/>

    </div>
  )
}

export default Home