import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const KalosLeaders = () => {
  const [mostrarDivKalos, setMostrarDivKalos] = useState(false)


  const handleClickKalos = () => {setMostrarDivKalos(!mostrarDivKalos);
      
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
        src="media/dex/Pokes/img/Regiones/06Kalos.png"
        onClick={handleClickKalos}
        alt="Imagen"
      />
      {mostrarDivKalos && (
        <div className="GymElite4">


          <h2 className='tituloLider' id='tituloLiderKalos'>
            LÍDER:
          </h2>


{/* =============================0================================== */}
          {mostrarDivViola1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 0
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickViola}
              />
              
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 0).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}


          {mostrarDivViola && (
            
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 0).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>
            </div>
          )}

          

          {mostrarDivViola && (
            <div className='TeamLeader'>

            <h2 className='EquipoTitulo'>Equipo:</h2>
            <div className='EquipoContainer'>
              {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 283).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>



            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 666).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>
      
            </div>

          )}


{/* =============================================================== */}

{/* ==========================1===================================== */}

        {mostrarDivGrant1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">

            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 1
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickGrant}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 1).map((personaje) => personaje.texto)}
              </h1> 
          </div>
        )}
         
          {mostrarDivGrant && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 1).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivGrant && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 698).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 696).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>
      
            </div>

          )}
{/* =============================================================== */}

{/* ===========================2==================================== */}
          {mostrarDivKorrina1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 2
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickKorrina}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 2).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivKorrina && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 2).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>


            </div>
          )}

          {mostrarDivKorrina && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 619).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 67).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 701).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>


      
            </div>

          )}
{/* =============================================================== */}


{/* ============================3=================================== */}
        
        {mostrarDivRamos1 && (
        <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 3
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickRamos}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 3).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
        )}
         
          {mostrarDivRamos && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 3).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivRamos && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 189).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 70).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 673).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>


            </div>

          )}
{/* =============================================================== */}

{/* ===========================4==================================== */}
          {mostrarDivClemont1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 4
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickClemont}
              />
            ))}
            </a>
          
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 4).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
          
          )}
         
          {mostrarDivClemont && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 4).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivClemont && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 587).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 82).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 695).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>          


            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            
            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>



            </div>

          )}
{/* =============================================================== */}

{/* ===========================5==================================== */}
          
          {mostrarDivValerie1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 5
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickValerie}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 5).map((personaje) => personaje.texto)} 
              </h1> 

          </div>
          )} 
         
          {mostrarDivValerie && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 5).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivValerie && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 303).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 122).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 700).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 65).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>            


            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            
            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            </div>

          )}
{/* =============================================================== */}

{/* =============================6================================== */}
            
            {mostrarDivOlympia1 && (
            <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 6
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickOlympia}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 6).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivOlympia && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 6).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivOlympia && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 561).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 199).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 678).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 58).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>            
      

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            
            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            </div>

          )}
{/* =============================================================== */}


{/* ============================7=================================== */}
          
          {mostrarDivWulfric1 && (
          <div className="contenedor">
            <a href="#tituloLiderKalos">
            {Lideres.LideresElite[5].Personaje.filter((Lider) => Lider.id === 7
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickWulfric}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[5].Personaje.filter(
              (Personaje) => Personaje.id === 7).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivWulfric && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[5].Personaje.filter(
                (Medallas) => Medallas.id === 7).map((Medallas) => (
                <img
                  key={Medallas.id}
                  src={Medallas.Medallas}
                  className="Medallas"
                />
              ))}

            <button className='BotonCierre' onClick={handleClickBoton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>

            </div>
          )}

          {mostrarDivWulfric && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 460).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 615).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 713).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>
            
            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>                        
      

            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            
            <div className='EquipoContainer Pokeball'>
              {Lideres.LideresElite[9].Pokeball.filter(
                (Pokeball) => Pokeball.id === 0).map((Pokeball) => (
                <img
                  key={Pokeball.id}
                  {...Pokeball}
                  className="Team"
                />
                
              ))}
            </div>

            </div>

          )}
{/* =============================================================== */}

        </div>
        
      )}

     
    </div>
  );
};

export default KalosLeaders;