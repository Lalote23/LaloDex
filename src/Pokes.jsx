import './Pokes.css'
import { useState } from 'react'
import ControlBotones from './ControlBotones'
import { Dex } from "./dataBase";





export const Pokes = ({ imagenes , Region  }) => {

  const  [ contador , setContador ] = useState(0)

  const numFotos = imagenes.length

  const { RegionDex } = Dex;


  return (

    <>


    <div className="PokesKanto">
     <div className="PokesKanto-container">


     {Dex.RegionDex[0].imagenes.map( imagen => 
              <img 
                key={ imagen.id  }
                { ...imagen }
                className="Carrousel-img" />
               
              )}

      </div>    
    </div>

    <div className='CarrouselKanto-num'>
        {Dex.RegionDex[0].imagenes.map( numero => 
             <h3 className='' key={ imagenes.id }>
             { numero.num }</h3>
            )}

          </div>

     <div className='CarrouselKanto-h3'>
        {Dex.RegionDex[0].imagenes.map( textos => 
             <h3 className='' key={ imagenes.id }>
             { textos.texto }</h3>
            )}

          </div>





    </>

  )
}
