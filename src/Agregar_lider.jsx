import React, { useState, useEffect } from 'react';
import AgregarLider from './Agregar';
import Header from './Header';
import "./Agregar.css"

export const Agregar = () => {
  // Obtener los datos de los líderes desde el LocalStorage al cargar el componente
  const [lideres, setLideres] = useState(JSON.parse(localStorage.getItem('lideres')) || []);
  const [liderImages, setLiderImages] = useState(
    JSON.parse(localStorage.getItem('liderImages')) || []
  );
  const [medallaImages, setMedallaImages] = useState(
    JSON.parse(localStorage.getItem('medallaImages')) || []
  );

  // Función para guardar los datos en el LocalStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('lideres', JSON.stringify(lideres));
    localStorage.setItem('liderImages', JSON.stringify(liderImages));
    localStorage.setItem('medallaImages', JSON.stringify(medallaImages));
  }, [lideres, liderImages, medallaImages]);

  // Función para manejar la acción de agregar un líder
  const handleAgregarLiderFunc = (nuevoLider) => {
    // Agregar el nuevo líder al estado de líderes
    setLideres([...lideres, nuevoLider]);
    // Agregar las imágenes seleccionadas para el líder actual al estado de imágenes
    setLiderImages([...liderImages, ...nuevoLider.Personaje.map((personaje) => personaje.Lider)]);
    setMedallaImages([...medallaImages, ...nuevoLider.Personaje.map((personaje) => personaje.Medallas)]);
  };

  // Función para manejar la eliminación de un líder por su índice
  const handleEliminarLider = (index) => {
    const nuevosLideres = [...lideres];
    nuevosLideres.splice(index, 1);
    setLideres(nuevosLideres);

    // También debemos eliminar las imágenes correspondientes del LocalStorage
    const nuevosLiderImages = [...liderImages];
    const nuevosMedallaImages = [...medallaImages];

    nuevosLiderImages.splice(index * lideres[0]?.Personaje?.length, lideres[0]?.Personaje?.length);
    nuevosMedallaImages.splice(index * lideres[0]?.Personaje?.length, lideres[0]?.Personaje?.length);

    setLiderImages(nuevosLiderImages);
    setMedallaImages(nuevosMedallaImages);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className='TituloPropuesta'>Propuesta de Líderes</h1>

        <AgregarLider
          onAgregarLider={handleAgregarLiderFunc}
          liderImages={liderImages}
          medallaImages={medallaImages}
          setLiderImages={setLiderImages}
          setMedallaImages={setMedallaImages}
        />

        <div className='ListaLider'>
        <h2 className='TituloSugerencia'>Líderes Agregados:</h2>
        <ul>
          {lideres.map((lider, index) => (
            <li key={index}>
              <strong className='Bold'>Región:</strong> 
              <br></br>
              {lider.Region}

              <ul>
                {lider.Personaje.map((personaje, personajeIndex) => (
                  <li key={personajeIndex}>
                    <br />
                    <strong className='Bold'>Nombre:</strong> 
                    <br></br>
                    {personaje.texto}
                    <br />
                    <br />
                    <strong className='Bold'>Imagen del líder:</strong>{' '}
                    <img
                        className='Espaciado'
                      src={liderImages[index * lider.Personaje.length + personajeIndex]}
                      alt={`Imagen del líder ${personaje.texto}`}
                      style={{ width: '100px', height: '100px' }}
                    />
                    <br />
                    <strong className='Bold'>Imagen de la medalla:</strong>{' '}
                    <img
                      className='Espaciado'
                      src={medallaImages[index * lider.Personaje.length + personajeIndex]}
                      alt={`Imagen de la medalla ${personaje.texto}`}
                      style={{ width: '100px', height: '100px' }}
                    />
                  </li>
                ))}
              </ul>
              <img className='Eliminar' src='media/dex/Pokes/icons8-minus-100.png' alt='Quitar' title='Quitar' onClick={() => handleEliminarLider(index)}/>
            </li>

          ))}
        </ul>
        </div>
      </div>
    </>
  );
};

export default Agregar;
