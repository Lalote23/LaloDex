import React, { useState } from 'react';
import '../RegionLeaders.css'
import { Lideres } from "../dataBase";
import { Dex } from "../dataBase";
import { Datos } from "../dataBase";
import { General } from '../dataBase';

export const HoennLeaders = () => {
  const [mostrarDivHoenn, setMostrarDivHoenn] = useState(false)


  const handleClickHoenn = () => {setMostrarDivHoenn(!mostrarDivHoenn);
      
    setMostrarDivRoxanne(false);
    setMostrarDivRoxanne1(true); 

    setMostrarDivBrawly(false); 
    setMostrarDivBrawly1(true);  

    setMostrarDivWattson(false); 
    setMostrarDivWattson1(true);  

    setMostrarDivFlannery(false); 
    setMostrarDivFlannery1(true);  

    setMostrarDivNorman(false); 
    setMostrarDivNorman1(true);  

    setMostrarDivWinona(false); 
    setMostrarDivWinona1(true);  

    setMostrarDivTateandLiza(false); 
    setMostrarDivTateandLiza1(true);  

    setMostrarDivWallace(false)
    setMostrarDivWallace1(true);}  

    const handleClickBoton = () => {  
      setMostrarDivRoxanne(false);
      setMostrarDivRoxanne1(true); 
  
      setMostrarDivBrawly(false); 
      setMostrarDivBrawly1(true);  
  
      setMostrarDivWattson(false); 
      setMostrarDivWattson1(true);  
  
      setMostrarDivFlannery(false); 
      setMostrarDivFlannery1(true);  
  
      setMostrarDivNorman(false); 
      setMostrarDivNorman1(true);  
  
      setMostrarDivWinona(false);
      setMostrarDivWinona1(true); 
  
      setMostrarDivTateandLiza(false); 
      setMostrarDivTateandLiza1(true);  
  
      setMostrarDivWallace(false)
      setMostrarDivWallace1(true);}  
  

  const [mostrarDivRoxanne, setMostrarDivRoxanne] = useState(false)
  const [mostrarDivRoxanne1, setMostrarDivRoxanne1] = useState(false)
  const [mostrarDivBrawly, setMostrarDivBrawly] = useState(false)
  const [mostrarDivBrawly1, setMostrarDivBrawly1] = useState(false)
  const [mostrarDivWattson, setMostrarDivWattson] = useState(false)
  const [mostrarDivWattson1, setMostrarDivWattson1] = useState(false)
  const [mostrarDivFlannery, setMostrarDivFlannery] = useState(false)
  const [mostrarDivFlannery1, setMostrarDivFlannery1] = useState(false)
  const [mostrarDivNorman, setMostrarDivNorman] = useState(false)
  const [mostrarDivNorman1, setMostrarDivNorman1] = useState(false)
  const [mostrarDivWinona, setMostrarDivWinona] = useState(false)
  const [mostrarDivWinona1, setMostrarDivWinona1] = useState(false)
  const [mostrarDivTateandLiza, setMostrarDivTateandLiza] = useState(false)
  const [mostrarDivTateandLiza1, setMostrarDivTateandLiza1] = useState(false)
  const [mostrarDivWallace, setMostrarDivWallace] = useState(false)
  const [mostrarDivWallace1, setMostrarDivWallace1] = useState(false)


  const handleClickRoxanne = () => {setMostrarDivRoxanne(!mostrarDivRoxanne);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickBrawly = () => {setMostrarDivBrawly(!mostrarDivBrawly);
  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);}

  const handleClickWattson = () => {setMostrarDivWattson(!mostrarDivWattson);
  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false);
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickFlannery = () => {setMostrarDivFlannery(!mostrarDivFlannery);
  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false);
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickNorman = () => {setMostrarDivNorman(!mostrarDivNorman);
  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickWinona = () => {setMostrarDivWinona(!mostrarDivWinona);   setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false); 
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickTateandLiza = () => {setMostrarDivTateandLiza(!mostrarDivTateandLiza) ;  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false);
  setMostrarDivWallace(false); setMostrarDivWallace1(false);} 

  const handleClickWallace = () => {setMostrarDivWallace(!mostrarDivWallace);  setMostrarDivRoxanne(false); setMostrarDivRoxanne1(false);
  setMostrarDivBrawly(false); setMostrarDivBrawly1(false); 
  setMostrarDivWattson(false); setMostrarDivWattson1(false); 
  setMostrarDivFlannery(false); setMostrarDivFlannery1(false); 
  setMostrarDivNorman(false); setMostrarDivNorman1(false); 
  setMostrarDivWinona(false); setMostrarDivWinona1(false); 
  setMostrarDivTateandLiza(false); setMostrarDivTateandLiza1(false);} 


  return (
    <div className="GymLeaders">
      <img
        src="media/dex/Pokes/img/Regiones/03Hoenn.png"
        onClick={handleClickHoenn}
        alt="Imagen"
      />
      {mostrarDivHoenn && (
        <div className="GymElite4">


          <h2 className='tituloLider' id='tituloLiderHoenn'>
            LÍDER:
          </h2>


{/* =============================0================================== */}
          {mostrarDivRoxanne1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 0
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickRoxanne}
              />
              
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 0).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}


          {mostrarDivRoxanne && (
            
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[2].Personaje.filter(
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

          

          {mostrarDivRoxanne && (
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
                (imagenes) => imagenes.id === 299).map((imagenes) => (
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

        {mostrarDivBrawly1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">

            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 1
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickBrawly}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 1).map((personaje) => personaje.texto)}
              </h1> 
          </div>
        )}
         
          {mostrarDivBrawly && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivBrawly && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 66).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

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
                (imagenes) => imagenes.id === 296).map((imagenes) => (
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
          {mostrarDivWattson1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 2
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickWattson}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 2).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivWattson && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivWattson && (
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
                (imagenes) => imagenes.id === 309).map((imagenes) => (
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
                (imagenes) => imagenes.id === 310).map((imagenes) => (
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


{/* ============================3=================================== */}
        
        {mostrarDivFlannery1 && (
        <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 3
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickFlannery}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 3).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
        )}
         
          {mostrarDivFlannery && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>
              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivFlannery && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 322).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 218).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 323).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 324).map((imagenes) => (
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
          {mostrarDivNorman1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 4
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickNorman}
              />
            ))}
            </a>
          
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 4).map((personaje) => personaje.texto)} 
              </h1> 
          </div>
          
          )}
         
          {mostrarDivNorman && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivNorman && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 327).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 288).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 264).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 289).map((imagenes) => (
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
          
          {mostrarDivWinona1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 5
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickWinona}
              />
            ))}
            </a>
            
            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 5).map((personaje) => personaje.texto)} 
              </h1> 

          </div>
          )} 
         
          {mostrarDivWinona && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivWinona && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 333).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 357).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 279).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 227).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>            


            <div className='EquipoContainer'>
            {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 334).map((imagenes) => (
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

            </div>

          )}
{/* =============================================================== */}

{/* =============================6================================== */}
            
            {mostrarDivTateandLiza1 && (
            <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 6
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickTateandLiza}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 6).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivTateandLiza && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivTateandLiza && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 344).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 178).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 337).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 338).map((imagenes) => (
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
          
          {mostrarDivWallace1 && (
          <div className="contenedor">
            <a href="#tituloLiderHoenn">
            {Lideres.LideresElite[2].Personaje.filter((Lider) => Lider.id === 7
            ).map((Lider) => (
              <img
                key={Lider.id}
                src={Lider.Lider}
                className="Personajes"
                onClick={handleClickWallace}
              />
            ))}
            </a>

            <h1 className='NameLeaders'>
            {Lideres.LideresElite[2].Personaje.filter(
              (Personaje) => Personaje.id === 7).map((personaje) => personaje.texto)}
              </h1> 
          </div>
          )}
         
          {mostrarDivWallace && (
            <div className="MedallaDiv">
              <h2 className='MedallasTitulo'>Medalla:</h2>

              {Lideres.LideresElite[2].Personaje.filter(
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

          {mostrarDivWallace && (
            <div className='TeamLeader'>
            <h2 className='EquipoTitulo'>Equipo:</h2>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 321).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>

            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 73).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>


            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 272).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>
            
            <div className='EquipoContainer'>
               {General.AllPokes[0].imagenes.filter(
                (imagenes) => imagenes.id === 340).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
                  className="Team"
                />
                
              ))}
            </div>                        
      

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
                (imagenes) => imagenes.id === 350).map((imagenes) => (
                <img
                  key={imagenes.id}
                  {...imagenes}
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

export default HoennLeaders;