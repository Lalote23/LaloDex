import './TipoDebil.css'
import { Datos } from "./dataBase";




export const Kanto = ({TipoDeb}) => {


  return(
  
      <>
  
      {Datos.RegionTipo[0].TipoDeb.map( imagen => 
          <div className="TipoDeb">
              <div className="TipoDebContainer">
              

            <p>{imagen.num}</p>
            <div className="Tipo" >
              <h2>Tipo:</h2>
              <img src={imagen.tipo1} loading="lazy"/>
              <img src={imagen.tipo2} loading="lazy"/>
            </div>
  
            <div className='TyD'>
            <div className="Fuerte">
            <h2>Fuerte contra:</h2>
              <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
              <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
              <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
              <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
              <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
              <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
              <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
              <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>

  
  
              </div>
  
            <div className="Debilidad">
            <h2>Débil contra:</h2>
              <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
              <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
              <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
              <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
              <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
              <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>

  
  
          </div>
          </div>
          </div>
          </div>
  
      )}
  
  
  </>
    )
  }

  export const Johto = ({TipoDeb}) => {


    return(
    
        <>
    
        {Datos.RegionTipo[1].TipoDeb.map( imagen => 
            <div className="TipoDeb">
                <div className="TipoDebContainer">
                
    
              {/* <h2>{imagen.texto}</h2> */}
              <p>{imagen.num}</p>
              <div className="Tipo" >
                <h2>Tipo:</h2>
                <img src={imagen.tipo1} loading="lazy"/>
                <img src={imagen.tipo2} loading="lazy"/>
              </div>
    
              <div className='TyD'>
              <div className="Fuerte">
              <h2>Fuerte contra:</h2>
                <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
                <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
                <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
                <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
                <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
                <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
                <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
                <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
                <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
                <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
                <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
                <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>
    
    
                </div>
    
              <div className="Debilidad">
              <h2>Débil contra:</h2>
                <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
                <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
                <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
                <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
                <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
                <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
                <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
                <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
                <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
                <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>
    
    
            </div>
            </div>
            </div>
            </div>
    
        )}
    
    
    </>
      )
    }

    export const Hoenn = ({TipoDeb}) => {


      return(
      
          <>
      
          {Datos.RegionTipo[2].TipoDeb.map( imagen => 
              <div className="TipoDeb">
                  <div className="TipoDebContainer">
                  
      
                {/* <h2>{imagen.texto}</h2> */}
                <p>{imagen.num}</p>
                <div className="Tipo" >
                  <h2>Tipo:</h2>
                  <img src={imagen.tipo1} loading="lazy"/>
                  <img src={imagen.tipo2} loading="lazy"/>
                </div>
      
                <div className='TyD'>
                <div className="Fuerte">
                <h2>Fuerte contra:</h2>
                  <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
                  <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
                  <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
                  <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
                  <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
                  <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
                  <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
                  <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
                  <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
                  <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
                  <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
                  <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>
      
      
                  </div>
      
                <div className="Debilidad">
                <h2>Débil contra:</h2>
                  <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
                  <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
                  <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
                  <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
                  <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
                  <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
                  <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
                  <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
                  <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
                  <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>
      
      
              </div>
              </div>
              </div>
              </div>
      
          )}
      
      
      </>
        )
      }

export const Sinnoh = ({TipoDeb}) => {


  return(

      <>

      {Datos.RegionTipo[3].TipoDeb.map( imagen => 
          <div className="TipoDeb">
              <div className="TipoDebContainer">
              

            {/* <h2>{imagen.texto}</h2> */}
            <p>{imagen.num}</p>
            <div className="Tipo">
              <h2>Tipo:</h2>
              <img src={imagen.tipo1} loading="lazy"/>
              <img src={imagen.tipo2} loading="lazy"/>
            </div>

            <div className='TyD'>
            <div className="Fuerte">
            <h2>Fuerte contra:</h2>
              <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
              <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
              <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
              <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
              <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
              <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
              <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
              <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
              <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>

              </div>

            <div className="Debilidad">
            <h2>Débil contra:</h2>
              <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
              <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
              <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
              <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
              <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
              <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
              <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
              <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>

          </div>
          </div>
          </div>
          </div>

      )}

  </>
  )
}


export const TeseliaUnova = ({TipoDeb}) => {


  return(
  
      <>
  
      {Datos.RegionTipo[4].TipoDeb.map( imagen => 
          <div className="TipoDeb">
              <div className="TipoDebContainer">
              
  
            {/* <h2>{imagen.texto}</h2> */}
            <p>{imagen.num}</p>
            <div className="Tipo" >
              <h2>Tipo:</h2>
              <img src={imagen.tipo1} loading="lazy"/>
              <img src={imagen.tipo2} loading="lazy"/>
            </div>
  
            <div className='TyD'>
            <div className="Fuerte">
            <h2>Fuerte contra:</h2>
              <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
              <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
              <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
              <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
              <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
              <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
              <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
              <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
              <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
              <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
              <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
              <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>
  
  
              </div>
  
            <div className="Debilidad">
            <h2>Débil contra:</h2>
              <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
              <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
              <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
              <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
              <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
              <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
              <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
              <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
              <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
              <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>
  
  
          </div>
          </div>
          </div>
          </div>
  
      )}
  
  
  </>
    )
  }


export const Kalos = ({TipoDeb}) => {


return(

    <>

    {Datos.RegionTipo[5].TipoDeb.map( imagen => 
        <div className="TipoDeb">
            <div className="TipoDebContainer">
            

          {/* <h2>{imagen.texto}</h2> */}
          <p>{imagen.num}</p>
          <div className="Tipo" >
            <h2>Tipo:</h2>
            <img src={imagen.tipo1} loading="lazy"/>
            <img src={imagen.tipo2} loading="lazy"/>
          </div>

          <div className='TyD'>
          <div className="Fuerte">
          <h2>Fuerte contra:</h2>
            <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
            <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
            <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
            <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
            <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
            <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
            <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
            <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
            <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
            <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
            <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
            <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>


            </div>

          <div className="Debilidad">
          <h2>Débil contra:</h2>
            <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
            <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
            <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
            <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
            <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
            <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
            <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
            <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
            <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
            <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>


        </div>
        </div>
        </div>
        </div>

    )}


</>
  )
}


export const Alola = ({TipoDeb}) => {


  return(

    <>

    {Datos.RegionTipo[6].TipoDeb.map( imagen => 
        <div className="TipoDeb">
            <div className="TipoDebContainer">
            

          {/* <h2>{imagen.texto}</h2> */}
          <p>{imagen.num}</p>
          <div className="Tipo" >
            <h2>Tipo:</h2>
            <img src={imagen.tipo1} loading="lazy"/>
            <img src={imagen.tipo2} loading="lazy"/>
          </div>

          <div className='TyD'>
          <div className="Fuerte">
          <h2>Fuerte contra:</h2>
            <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
            <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
            <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
            <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
            <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
            <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
            <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
            <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
            <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
            <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
            <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
            <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>


            </div>

          <div className="Debilidad">
          <h2>Débil contra:</h2>
            <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
            <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
            <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
            <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
            <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
            <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
            <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
            <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
            <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
            <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>


        </div>
        </div>
        </div>
        </div>

    )}


</>
  )
}

export const Galar = ({TipoDeb}) => {


return(

    <>

    {Datos.RegionTipo[7].TipoDeb.map( imagen => 
        <div className="TipoDeb">
            <div className="TipoDebContainer">
            

          {/* <h2>{imagen.texto}</h2> */}
          <p>{imagen.num}</p>
          <div className="Tipo" >
            <h2>Tipo:</h2>
            <img src={imagen.tipo1} loading="lazy"/>
            <img src={imagen.tipo2} loading="lazy"/>
          </div>

          <div className='TyD'>
          <div className="Fuerte">
          <h2>Fuerte contra:</h2>
            <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
            <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
            <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
            <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
            <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
            <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
            <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
            <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
            <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
            <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
            <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
            <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>


            </div>

          <div className="Debilidad">
          <h2>Débil contra:</h2>
            <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
            <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
            <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
            <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
            <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
            <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
            <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
            <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
            <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
            <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>


        </div>
        </div>
        </div>
        </div>

    )}


</>
  )
}



export const Paldea = ({TipoDeb}) => {


return(

    <>

    {Datos.RegionTipo[8].TipoDeb.map( imagen => 
        <div className="TipoDeb quehago">
            <div className="TipoDebContainer">
            

          {/* <h2>{imagen.texto}</h2> */}
          <p>{imagen.num}</p>
          <div className="Tipo" >
            <h2>Tipo:</h2>
            <img src={imagen.tipo1} loading="lazy"/>
            <img src={imagen.tipo2} loading="lazy"/>
          </div>

          <div className='TyD'>
          <div className="Fuerte">
          <h2>Fuerte contra:</h2>
            <img src={imagen.fuerte1} alt={imagen.fuerte1} loading="lazy"/>
            <img src={imagen.fuerte2} alt={imagen.fuerte2} loading="lazy"/>
            <img src={imagen.fuerte3} alt={imagen.fuerte3} loading="lazy"/>
            <img src={imagen.fuerte4} alt={imagen.fuerte4} loading="lazy"/>
            <img src={imagen.fuerte5} alt={imagen.fuerte5} loading="lazy"/>
            <img src={imagen.fuerte6} alt={imagen.fuerte6} loading="lazy"/>
            <img src={imagen.fuerte7} alt={imagen.fuerte7} loading="lazy"/>
            <img src={imagen.fuerte8} alt={imagen.fuerte8} loading="lazy"/>
            <img src={imagen.fuerte9} alt={imagen.fuerte9} loading="lazy"/>
            <img src={imagen.fuerte10} alt={imagen.fuerte10} loading="lazy"/>
            <img src={imagen.fuerte11} alt={imagen.fuerte11} loading="lazy"/>
            <img src={imagen.fuerte12} alt={imagen.fuerte12} loading="lazy"/>


            </div>

          <div className="Debilidad">
          <h2>Débil contra:</h2>
            <img src={imagen.debil1} alt={imagen.debil1} loading="lazy"/>
            <img src={imagen.debil2} alt={imagen.debil2} loading="lazy"/>
            <img src={imagen.debil3} alt={imagen.debil3} loading="lazy"/>
            <img src={imagen.debil4} alt={imagen.debil4} loading="lazy"/>
            <img src={imagen.debil5} alt={imagen.debil5} loading="lazy"/>
            <img src={imagen.debil6} alt={imagen.debil6} loading="lazy"/>
            <img src={imagen.debil7} alt={imagen.debil7} loading="lazy"/>
            <img src={imagen.debil8} alt={imagen.debil8} loading="lazy"/>
            <img src={imagen.debil9} alt={imagen.debil9} loading="lazy"/>
            <img src={imagen.debil10} alt={imagen.debil10} loading="lazy"/>


        </div>
        </div>
        </div>
        </div>

    )}

  </>
  )
}