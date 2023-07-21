import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const KantoLeaders = () => {
  const [mostrarDivKanto, setMostrarDivKanto] = useState(false)


  const handleClickKanto = () => {setMostrarDivKanto(!mostrarDivKanto);
      
    setMostrarDivBrock(false);
    setMostrarDivBrock1(true); 

    setMostrarDivMisty(false); 
    setMostrarDivMisty1(true);  

    setMostrarDivLt_Surge(false); 
    setMostrarDivLt_Surge1(true);  

    setMostrarDivErika(false); 
    setMostrarDivErika1(true);  

    setMostrarDivKoga(false); 
    setMostrarDivKoga1(true);  

    setMostrarDivSabrina(false); 
    setMostrarDivSabrina1(true);  

    setMostrarDivBlaine(false); 
    setMostrarDivBlaine1(true);  

    setMostrarDivGiovanni(false);
    setMostrarDivGiovanni1(true);}  

    const handleClickBoton = () => {  
      setMostrarDivBrock(false);
      setMostrarDivBrock1(true); 
  
      setMostrarDivMisty(false); 
      setMostrarDivMisty1(true);  
  
      setMostrarDivLt_Surge(false); 
      setMostrarDivLt_Surge1(true);  
  
      setMostrarDivErika(false); 
      setMostrarDivErika1(true);  
  
      setMostrarDivKoga(false); 
      setMostrarDivKoga1(true);  
  
      setMostrarDivSabrina(false); 
      setMostrarDivSabrina1(true);  
  
      setMostrarDivBlaine(false); 
      setMostrarDivBlaine1(true);  
  
      setMostrarDivGiovanni(false)
      setMostrarDivGiovanni1(true);}  
  

  const [mostrarDivBrock, setMostrarDivBrock] = useState(false)
  const [mostrarDivBrock1, setMostrarDivBrock1] = useState(false)
  const [mostrarDivMisty, setMostrarDivMisty] = useState(false)
  const [mostrarDivMisty1, setMostrarDivMisty1] = useState(false)
  const [mostrarDivLt_Surge, setMostrarDivLt_Surge] = useState(false)
  const [mostrarDivLt_Surge1, setMostrarDivLt_Surge1] = useState(false)
  const [mostrarDivErika, setMostrarDivErika] = useState(false)
  const [mostrarDivErika1, setMostrarDivErika1] = useState(false)
  const [mostrarDivKoga, setMostrarDivKoga] = useState(false)
  const [mostrarDivKoga1, setMostrarDivKoga1] = useState(false)
  const [mostrarDivSabrina, setMostrarDivSabrina] = useState(false)
  const [mostrarDivSabrina1, setMostrarDivSabrina1] = useState(false)
  const [mostrarDivBlaine, setMostrarDivBlaine] = useState(false)
  const [mostrarDivBlaine1, setMostrarDivBlaine1] = useState(false)
  const [mostrarDivGiovanni, setMostrarDivGiovanni] = useState(false)
  const [mostrarDivGiovanni1, setMostrarDivGiovanni1] = useState(false)


  const handleClickBrock = () => {setMostrarDivBrock(!mostrarDivBrock);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickMisty = () => {setMostrarDivMisty(!mostrarDivMisty);
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);}

  const handleClickLt_Surge = () => {setMostrarDivLt_Surge(!mostrarDivLt_Surge);
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false);
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickErika = () => {setMostrarDivErika(!mostrarDivErika);
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false);
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickKoga = () => {setMostrarDivKoga(!mostrarDivKoga);
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickSabrina = () => {setMostrarDivSabrina(!mostrarDivSabrina);   
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false); 
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickBlaine = () => {setMostrarDivBlaine(!mostrarDivBlaine) ;  
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false);
  setMostrarDivGiovanni(false); setMostrarDivGiovanni1(false);} 

  const handleClickGiovanni = () => {setMostrarDivGiovanni(!mostrarDivGiovanni);  
  setMostrarDivBrock(false); setMostrarDivBrock1(false);
  setMostrarDivMisty(false); setMostrarDivMisty1(false); 
  setMostrarDivLt_Surge(false); setMostrarDivLt_Surge1(false); 
  setMostrarDivErika(false); setMostrarDivErika1(false); 
  setMostrarDivKoga(false); setMostrarDivKoga1(false); 
  setMostrarDivSabrina(false); setMostrarDivSabrina1(false); 
  setMostrarDivBlaine(false); setMostrarDivBlaine1(false);} 


  return (
    <div className="GymLeaders">
      <img
        src="media/dex/Pokes/img/Regiones/01Kanto.png"
        onClick={handleClickKanto}
        alt="Imagen"
      />
      {mostrarDivKanto && (
        <div className="GymElite4">


          <h2 className='tituloLider' id='tituloLiderKanto'>
            LÍDER:
          </h2>


{/* =============================0================================== */}
          {mostrarDivBrock1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 0
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickBrock}
              />
              
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 0).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}


          {mostrarDivBrock && (
            
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[0].Personaje.filter(
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

          

          {mostrarDivBrock && (
            <div className='TeamLeader'>

            <h2 className='EquipoTitulo'>Equipo:</h2>
            <div className='EquipoContainer'>
              {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 74).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>



            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 95).map((imagenes) => (
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

        {mostrarDivMisty1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">

            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 1
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickMisty}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 1).map((personaje) => personaje.texto)}
              </h1> 
          </div>
        )}
         
          {mostrarDivMisty && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivMisty && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 54).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 121).map((imagenes) => (
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
          {mostrarDivLt_Surge1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 2
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickLt_Surge}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 2).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivLt_Surge && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivLt_Surge && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 100).map((imagenes) => (
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
                (imagenes) => imagenes.id === 26).map((imagenes) => (
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
        
        {mostrarDivErika1 && (
        <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 3
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickErika}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 3).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
        )}
         
          {mostrarDivErika && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivErika && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 114).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 71).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 45).map((imagenes) => (
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
          {mostrarDivKoga1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 4
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickKoga}
              />
            ))}
            </a>
          
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 4).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
          
          )}
         
          {mostrarDivKoga && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivKoga && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 110).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 89).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 42).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 49).map((imagenes) => (
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

{/* ===========================5==================================== */}
          
          {mostrarDivSabrina1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 5
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickSabrina}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 5).map((personaje) => personaje.texto)} 
              </h1> 

          </div>
          )} 
         
          {mostrarDivSabrina && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivSabrina && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

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
                (imagenes) => imagenes.id === 80).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 124).map((imagenes) => (
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
            
            {mostrarDivBlaine1 && (
            <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 6
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickBlaine}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 6).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivBlaine && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivBlaine && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 126).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 78).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 38).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 59).map((imagenes) => (
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
          
          {mostrarDivGiovanni1 && (
          <div className="contenedor">
            <a href="#tituloLiderKanto">
            {Lideres.LideresElite[0].Personaje.filter((Lider) => Lider.id === 7
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickGiovanni}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[0].Personaje.filter(
              (Personaje) => Personaje.id === 7).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivGiovanni && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[0].Personaje.filter(
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

          {mostrarDivGiovanni && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 51).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 31).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 34).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>
            
            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 112).map((imagenes) => (
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

export default KantoLeaders;