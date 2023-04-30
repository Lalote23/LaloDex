import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const JohtoLeaders = () => {
  const [mostrarDivJohto, setMostrarDivJohto] = useState(false)


  const handleClickJohto = () => {setMostrarDivJohto(!mostrarDivJohto);
      
    setMostrarDivFalkner(false);
    setMostrarDivFalkner1(true); 

    setMostrarDivBugsy(false); 
    setMostrarDivBugsy1(true);  

    setMostrarDivWhitney(false); 
    setMostrarDivWhitney1(true);  

    setMostrarDivMorty(false); 
    setMostrarDivMorty1(true);  

    setMostrarDivChuck(false); 
    setMostrarDivChuck1(true);  

    setMostrarDivJasmine(false); 
    setMostrarDivJasmine1(true);  

    setMostrarDivPryce(false); 
    setMostrarDivPryce1(true);  

    setMostrarDivClair(false)
    setMostrarDivClair1(true);}  

    const handleClickBoton = () => {  
      setMostrarDivFalkner(false);
      setMostrarDivFalkner1(true); 
  
      setMostrarDivBugsy(false); 
      setMostrarDivBugsy1(true);  
  
      setMostrarDivWhitney(false); 
      setMostrarDivWhitney1(true);  
  
      setMostrarDivMorty(false); 
      setMostrarDivMorty1(true);  
  
      setMostrarDivChuck(false); 
      setMostrarDivChuck1(true);  
  
      setMostrarDivJasmine(false); 
      setMostrarDivJasmine1(true);  
  
      setMostrarDivPryce(false); 
      setMostrarDivPryce1(true);  
  
      setMostrarDivClair(false)
      setMostrarDivClair1(true);}  
  

  const [mostrarDivFalkner, setMostrarDivFalkner] = useState(false)
  const [mostrarDivFalkner1, setMostrarDivFalkner1] = useState(false)
  const [mostrarDivBugsy, setMostrarDivBugsy] = useState(false)
  const [mostrarDivBugsy1, setMostrarDivBugsy1] = useState(false)
  const [mostrarDivWhitney, setMostrarDivWhitney] = useState(false)
  const [mostrarDivWhitney1, setMostrarDivWhitney1] = useState(false)
  const [mostrarDivMorty, setMostrarDivMorty] = useState(false)
  const [mostrarDivMorty1, setMostrarDivMorty1] = useState(false)
  const [mostrarDivChuck, setMostrarDivChuck] = useState(false)
  const [mostrarDivChuck1, setMostrarDivChuck1] = useState(false)
  const [mostrarDivJasmine, setMostrarDivJasmine] = useState(false)
  const [mostrarDivJasmine1, setMostrarDivJasmine1] = useState(false)
  const [mostrarDivPryce, setMostrarDivPryce] = useState(false)
  const [mostrarDivPryce1, setMostrarDivPryce1] = useState(false)
  const [mostrarDivClair, setMostrarDivClair] = useState(false)
  const [mostrarDivClair1, setMostrarDivClair1] = useState(false)


  const handleClickFalkner = () => {setMostrarDivFalkner(!mostrarDivFalkner);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickBugsy = () => {setMostrarDivBugsy(!mostrarDivBugsy);
  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);}

  const handleClickWhitney = () => {setMostrarDivWhitney(!mostrarDivWhitney);
  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false);
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickMorty = () => {setMostrarDivMorty(!mostrarDivMorty);
  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false);
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickChuck = () => {setMostrarDivChuck(!mostrarDivChuck);
  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickJasmine = () => {setMostrarDivJasmine(!mostrarDivJasmine);   setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false); 
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickPryce = () => {setMostrarDivPryce(!mostrarDivPryce) ;  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false);
  setMostrarDivClair(false); setMostrarDivClair1(false);} 

  const handleClickClair = () => {setMostrarDivClair(!mostrarDivClair);  setMostrarDivFalkner(false); setMostrarDivFalkner1(false);
  setMostrarDivBugsy(false); setMostrarDivBugsy1(false); 
  setMostrarDivWhitney(false); setMostrarDivWhitney1(false); 
  setMostrarDivMorty(false); setMostrarDivMorty1(false); 
  setMostrarDivChuck(false); setMostrarDivChuck1(false); 
  setMostrarDivJasmine(false); setMostrarDivJasmine1(false); 
  setMostrarDivPryce(false); setMostrarDivPryce1(false);} 


  return (
    <div className="GymLeaders">
      <img
        src="../src/assets/dex/Pokes/img/Regiones/02Johto.png"
        onClick={handleClickJohto}
        alt="Imagen"
      />
      {mostrarDivJohto && (
        <div className="GymElite4">


          <h2 className='tituloLider' id='tituloLiderJohto'>
            LÍDER:
          </h2>


{/* =============================0================================== */}
          {mostrarDivFalkner1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 0
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickFalkner}
              />
              
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 0).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}


          {mostrarDivFalkner && (
            
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[1].Personaje.filter(
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

          

          {mostrarDivFalkner && (
            <div className='TeamLeader'>

            <h2 className='EquipoTitulo'>Equipo:</h2>
            <div className='EquipoContainer'>
              {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 16).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>



            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 17).map((imagenes) => (
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

        {mostrarDivBugsy1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">

            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 1
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickBugsy}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 1).map((personaje) => personaje.texto)}
              </h1> 
          </div>
        )}
         
          {mostrarDivBugsy && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivBugsy && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 123).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 11).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 14).map((imagenes) => (
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

{/* ===========================2==================================== */}
          {mostrarDivWhitney1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 2
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickWhitney}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 2).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivWhitney && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivWhitney && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 35).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 241).map((imagenes) => (
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


{/* ============================3=================================== */}
        
        {mostrarDivMorty1 && (
        <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 3
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickMorty}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 3).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
        )}
         
          {mostrarDivMorty && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivMorty && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 92).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 93).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 94).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 93).map((imagenes) => (
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

{/* ===========================4==================================== */}
          {mostrarDivChuck1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 4
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickChuck}
              />
            ))}
            </a>
          
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 4).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
          
          )}
         
          {mostrarDivChuck && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivChuck && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 57).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 62).map((imagenes) => (
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

{/* ===========================5==================================== */}
          
          {mostrarDivJasmine1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 5
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickJasmine}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 5).map((personaje) => personaje.texto)} 
              </h1> 

          </div>
          )} 
         
          {mostrarDivJasmine && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivJasmine && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 81).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 81).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 208).map((imagenes) => (
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

{/* =============================6================================== */}
            
            {mostrarDivPryce1 && (
            <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 6
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickPryce}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 6).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivPryce && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivPryce && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 86).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 87).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 221).map((imagenes) => (
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


{/* ============================7=================================== */}
          
          {mostrarDivClair1 && (
          <div className="contenedor">
            <a href="#tituloLiderJohto">
            {Lideres.LideresElite[1].Personaje.filter((Lider) => Lider.id === 7
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickClair}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[1].Personaje.filter(
              (Personaje) => Personaje.id === 7).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivClair && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[1].Personaje.filter(
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

          {mostrarDivClair && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 130).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 148).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 148).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>
            
            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 230).map((imagenes) => (
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

        </div>
        
      )}

     
    </div>
  );
};

export default JohtoLeaders;