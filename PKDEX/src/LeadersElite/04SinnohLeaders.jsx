import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const SinnohLeaders = () => {
  const [mostrarDivSinnoh, setMostrarDivSinnoh] = useState(false)


  const handleClickSinnoh = () => {setMostrarDivSinnoh(!mostrarDivSinnoh);
      
    setMostrarDivRoark(false);
    setMostrarDivRoark1(true); 

    setMostrarDivGardenia(false); 
    setMostrarDivGardenia1(true);  

    setMostrarDivMaylene(false); 
    setMostrarDivMaylene1(true);  

    setMostrarDivCrasher(false); 
    setMostrarDivCrasher1(true);  

    setMostrarDivFantina(false); 
    setMostrarDivFantina1(true);  

    setMostrarDivByron(false); 
    setMostrarDivByron1(true);  

    setMostrarDivCandice(false); 
    setMostrarDivCandice1(true);  

    setMostrarDivVolkner(false);
    setMostrarDivVolkner1(true);}  

    const handleClickBoton = () => {  
      setMostrarDivRoark(false);
      setMostrarDivRoark1(true); 
  
      setMostrarDivGardenia(false); 
      setMostrarDivGardenia1(true);  
  
      setMostrarDivMaylene(false); 
      setMostrarDivMaylene1(true);  
  
      setMostrarDivCrasher(false); 
      setMostrarDivCrasher1(true);  
  
      setMostrarDivFantina(false); 
      setMostrarDivFantina1(true);  
  
      setMostrarDivByron(false); 
      setMostrarDivByron1(true);  
  
      setMostrarDivCandice(false); 
      setMostrarDivCandice1(true);  
  
      setMostrarDivVolkner(false)
      setMostrarDivVolkner1(true);}  
  

  const [mostrarDivRoark, setMostrarDivRoark] = useState(false)
  const [mostrarDivRoark1, setMostrarDivRoark1] = useState(false)
  const [mostrarDivGardenia, setMostrarDivGardenia] = useState(false)
  const [mostrarDivGardenia1, setMostrarDivGardenia1] = useState(false)
  const [mostrarDivMaylene, setMostrarDivMaylene] = useState(false)
  const [mostrarDivMaylene1, setMostrarDivMaylene1] = useState(false)
  const [mostrarDivCrasher, setMostrarDivCrasher] = useState(false)
  const [mostrarDivCrasher1, setMostrarDivCrasher1] = useState(false)
  const [mostrarDivFantina, setMostrarDivFantina] = useState(false)
  const [mostrarDivFantina1, setMostrarDivFantina1] = useState(false)
  const [mostrarDivByron, setMostrarDivByron] = useState(false)
  const [mostrarDivByron1, setMostrarDivByron1] = useState(false)
  const [mostrarDivCandice, setMostrarDivCandice] = useState(false)
  const [mostrarDivCandice1, setMostrarDivCandice1] = useState(false)
  const [mostrarDivVolkner, setMostrarDivVolkner] = useState(false)
  const [mostrarDivVolkner1, setMostrarDivVolkner1] = useState(false)


  const handleClickRoark = () => {setMostrarDivRoark(!mostrarDivRoark);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickGardenia = () => {setMostrarDivGardenia(!mostrarDivGardenia);
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);}

  const handleClickMaylene = () => {setMostrarDivMaylene(!mostrarDivMaylene);
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false);
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickCrasher = () => {setMostrarDivCrasher(!mostrarDivCrasher);
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false);
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickFantina = () => {setMostrarDivFantina(!mostrarDivFantina);
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickByron = () => {setMostrarDivByron(!mostrarDivByron);   
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false); 
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickCandice = () => {setMostrarDivCandice(!mostrarDivCandice) ;  
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false);
  setMostrarDivVolkner(false); setMostrarDivVolkner1(false);} 

  const handleClickVolkner = () => {setMostrarDivVolkner(!mostrarDivVolkner);  
  setMostrarDivRoark(false); setMostrarDivRoark1(false);
  setMostrarDivGardenia(false); setMostrarDivGardenia1(false); 
  setMostrarDivMaylene(false); setMostrarDivMaylene1(false); 
  setMostrarDivCrasher(false); setMostrarDivCrasher1(false); 
  setMostrarDivFantina(false); setMostrarDivFantina1(false); 
  setMostrarDivByron(false); setMostrarDivByron1(false); 
  setMostrarDivCandice(false); setMostrarDivCandice1(false);} 


  return (
    <div className="GymLeaders">
      <img
        src="../src/assets/dex/Pokes/img/Regiones/04Sinnoh.png"
        onClick={handleClickSinnoh}
        alt="Imagen"
      />
      {mostrarDivSinnoh && (
        <div className="GymElite4">


          <h2 className='tituloLider' id='tituloLiderSinnoh'>
            LÍDER:
          </h2>


{/* =============================0================================== */}
          {mostrarDivRoark1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 0
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickRoark}
              />
              
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 0).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}


          {mostrarDivRoark && (
            
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[3].Personaje.filter(
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

          

          {mostrarDivRoark && (
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

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 408).map((imagenes) => (
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

{/* ==========================1===================================== */}

        {mostrarDivGardenia1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">

            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 1
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickGardenia}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 1).map((personaje) => personaje.texto)}
              </h1> 
          </div>
        )}
         
          {mostrarDivGardenia && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivGardenia && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 387).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 421).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 407).map((imagenes) => (
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
          {mostrarDivMaylene1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 2
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickMaylene}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 2).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivMaylene && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivMaylene && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 307).map((imagenes) => (
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
                (imagenes) => imagenes.id === 448).map((imagenes) => (
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
        
        {mostrarDivCrasher1 && (
        <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 3
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickCrasher}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 3).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
        )}
         
          {mostrarDivCrasher && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivCrasher && (
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
                (imagenes) => imagenes.id === 195).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 419).map((imagenes) => (
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
          {mostrarDivFantina1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 4
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickFantina}
              />
            ))}
            </a>
          
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 4).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
          
          )}
         
          {mostrarDivFantina && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivFantina && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 355).map((imagenes) => (
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
                (imagenes) => imagenes.id === 429).map((imagenes) => (
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
          
          {mostrarDivByron1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 5
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickByron}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 5).map((personaje) => personaje.texto)} 
              </h1> 

          </div>
          )} 
         
          {mostrarDivByron && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivByron && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

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
                (imagenes) => imagenes.id === 208).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 411).map((imagenes) => (
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
            
            {mostrarDivCandice1 && (
            <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 6
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickCandice}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 6).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivCandice && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivCandice && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 215).map((imagenes) => (
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
                (imagenes) => imagenes.id === 478).map((imagenes) => (
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
          
          {mostrarDivVolkner1 && (
          <div className="contenedor">
            <a href="#tituloLiderSinnoh">
            {Lideres.LideresElite[3].Personaje.filter((Lider) => Lider.id === 7
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickVolkner}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[3].Personaje.filter(
              (Personaje) => Personaje.id === 7).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivVolkner && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[3].Personaje.filter(
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

          {mostrarDivVolkner && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 135).map((imagenes) => (
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


            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 405).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>
            
            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 466).map((imagenes) => (
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

export default SinnohLeaders;