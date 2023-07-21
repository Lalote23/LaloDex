import { useState } from 'react'

export const Nom_num = ({imagenes}) =>{
    return(

    <>

    <div className='Carrousel-h3'>
            {imagenes.map( textos => 
                <h3 className='' key={ imagenes.id }>
                { textos.texto }</h3>
                )}

            </div>

        <div className='Carrousel-num'>
            {imagenes.map( numero => 
                <h3 className='' key={ imagenes.id }>
                { numero.num }</h3>
                )}

            </div>


    </>


    )


}