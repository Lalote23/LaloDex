import React, { useState } from 'react';
import './RegionLeaders.css'
import KantoLeaders from './LeadersElite/01KantoLeaders';
import JohtoLeaders from './LeadersElite/02JohtoLeaders';
import HoennLeaders from './LeadersElite/03HoennLeaders';
import SinnohLeaders from './LeadersElite/04SinnohLeaders';
import UnovaLeaders from './LeadersElite/05UnovaLeaders';
import KalosLeaders from './LeadersElite/06KalosLeaders';
import GalarLeaders from './LeadersElite/08GalarLeaders';
import PaldeaLeaders from './LeadersElite/09PaldeaLeaders';
import AlolaLeaders from './LeadersElite/07AlolaLeaders';


export const Imagen = () => {
 

  return (
    <div>
      
    <KantoLeaders/>

    <JohtoLeaders/>

    <HoennLeaders/>

    <SinnohLeaders/>

    <UnovaLeaders/>

    <KalosLeaders/>

    <AlolaLeaders/>

    <GalarLeaders/>

    <PaldeaLeaders/>


    <button className='totop' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    <div class="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <div class="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>

    </div>
  )
}

export default Imagen;