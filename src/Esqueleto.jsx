import './Esqueleto.css'
import { useState } from 'react'
import ControlBotones from './ControlBotones'
import { Device } from "./dataBase";
import { NationalDex } from './NationalDex';



export const Esqueleto = ({ imagenes }) => {

  const { RegionDevice } = Device;

 

    return (
      <>
 

        <div className='Esqueleto'>
          <div className='Esqueleto-container'>


      { Device.RegionDevice[0].imagenes.map( imagen => 
              <img 
                key={ imagen.id  }
                { ...imagen }
                    loading="lazy"
                    className="Esqueleto-img" />
               
              )}
          </div>
        </div>
            
        </>


    )}           
