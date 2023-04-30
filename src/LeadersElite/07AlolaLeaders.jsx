import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const AlolaLeaders = () => {
  const [mostrarDivAlola, setMostrarDivAlola] = useState(false)


  const handleClickAlola = () => {setMostrarDivAlola(!mostrarDivAlola);
      
    setMostrarDivViola(false);
    setMostrarDivViola1(true); 

    setMostrarDivGrant(false); 
    setMostrarDivGrant1(true);  

    setMostrarDivKorrina(false); 
    setMostrarDivKorrina1(true);  

    setMostrarDivRamos(false); 
    setMostrarDivRamos1(true);  

    setMostrarDivClemont(false); 
    setMostrarDivClemont1(true);  

    setMostrarDivValerie(false); 
    setMostrarDivValerie1(true);  

    setMostrarDivOlympia(false); 
    setMostrarDivOlympia1(true);  

    setMostrarDivWulfric(false)
    setMostrarDivWulfric1(true);}  

    const handleClickBoton = () => {  
      setMostrarDivViola(false);
      setMostrarDivViola1(true); 
  
      setMostrarDivGrant(false); 
      setMostrarDivGrant1(true);  
  
      setMostrarDivKorrina(false); 
      setMostrarDivKorrina1(true);  
  
      setMostrarDivRamos(false); 
      setMostrarDivRamos1(true);  
  
      setMostrarDivClemont(false); 
      setMostrarDivClemont1(true);  
  
      setMostrarDivValerie(false); 
      setMostrarDivValerie1(true);  
  
      setMostrarDivOlympia(false); 
      setMostrarDivOlympia1(true);  
  
      setMostrarDivWulfric(false)
      setMostrarDivWulfric1(true);}  
  

  const [mostrarDivViola, setMostrarDivViola] = useState(false)
  const [mostrarDivViola1, setMostrarDivViola1] = useState(false)
  const [mostrarDivGrant, setMostrarDivGrant] = useState(false)
  const [mostrarDivGrant1, setMostrarDivGrant1] = useState(false)
  const [mostrarDivKorrina, setMostrarDivKorrina] = useState(false)
  const [mostrarDivKorrina1, setMostrarDivKorrina1] = useState(false)
  const [mostrarDivRamos, setMostrarDivRamos] = useState(false)
  const [mostrarDivRamos1, setMostrarDivRamos1] = useState(false)
  const [mostrarDivClemont, setMostrarDivClemont] = useState(false)
  const [mostrarDivClemont1, setMostrarDivClemont1] = useState(false)
  const [mostrarDivValerie, setMostrarDivValerie] = useState(false)
  const [mostrarDivValerie1, setMostrarDivValerie1] = useState(false)
  const [mostrarDivOlympia, setMostrarDivOlympia] = useState(false)
  const [mostrarDivOlympia1, setMostrarDivOlympia1] = useState(false)
  const [mostrarDivWulfric, setMostrarDivWulfric] = useState(false)
  const [mostrarDivWulfric1, setMostrarDivWulfric1] = useState(false)


  const handleClickViola = () => {setMostrarDivViola(!mostrarDivViola);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickGrant = () => {setMostrarDivGrant(!mostrarDivGrant);
  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);}

  const handleClickKorrina = () => {setMostrarDivKorrina(!mostrarDivKorrina);
  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false);
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickRamos = () => {setMostrarDivRamos(!mostrarDivRamos);
  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false);
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickClemont = () => {setMostrarDivClemont(!mostrarDivClemont);
  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickValerie = () => {setMostrarDivValerie(!mostrarDivValerie);   setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false); 
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickOlympia = () => {setMostrarDivOlympia(!mostrarDivOlympia) ;  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false);
  setMostrarDivWulfric(false); setMostrarDivWulfric1(false);} 

  const handleClickWulfric = () => {setMostrarDivWulfric(!mostrarDivWulfric);  setMostrarDivViola(false); setMostrarDivViola1(false);
  setMostrarDivGrant(false); setMostrarDivGrant1(false); 
  setMostrarDivKorrina(false); setMostrarDivKorrina1(false); 
  setMostrarDivRamos(false); setMostrarDivRamos1(false); 
  setMostrarDivClemont(false); setMostrarDivClemont1(false); 
  setMostrarDivValerie(false); setMostrarDivValerie1(false); 
  setMostrarDivOlympia(false); setMostrarDivOlympia1(false);} 


  return (
    <div className="GymLeaders">
      <img
        src="../src/assets/dex/Pokes/img/Regiones/07Alola.png"
        onClick={handleClickAlola}
        alt="Imagen"
      />
      {mostrarDivAlola && (
        <div className="GymElite4">

        <div className='Alola'>
          <h2 className='tituloLider' id='tituloLiderAlola'>
            A diferencia de otras regiones, Alola no cuenta con lideres de gimnasio.

            Ahí el entrenador se enfrenta a diferentes desafios en las islas.
          </h2>


          </div>



        </div>
        
      )}

     
    </div>
  );
};

export default AlolaLeaders;