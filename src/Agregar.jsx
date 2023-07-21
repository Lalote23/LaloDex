import React, { useState } from 'react';

export const AgregarLider = ({ onAgregarLider }) => {
  const [nuevoLider, setNuevoLider] = useState({
    Region: '',
    Personaje: [],
  });

  const [personajeAgregado, setPersonajeAgregado] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevoLider({
      ...nuevoLider,
      [name]: value,
    });
  };

  const handleAgregarLider = () => {
    // Validar que todos los campos estén completos antes de agregar el líder
    if (nuevoLider.Region && nuevoLider.Personaje.length > 0) {
      onAgregarLider(nuevoLider);
      setNuevoLider({
        Region: '',
        Personaje: [],
      });
      setPersonajeAgregado(false); // Reiniciamos el estado para permitir agregar otro personaje
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const handleAgregarPersonaje = () => {
    if (!personajeAgregado) {
      const nuevoPersonaje = {
        id: nuevoLider.Personaje.length,
        texto: '',
        Lider: '', // Cambiamos este campo para que acepte una URL en lugar de un archivo
        Medallas: '', // Cambiamos este campo para que acepte una URL en lugar de un archivo
      };
      setNuevoLider({
        ...nuevoLider,
        Personaje: [...nuevoLider.Personaje, nuevoPersonaje],
      });
      setPersonajeAgregado(true);
    }
  };

  const handlePersonajeInputChange = (event, personajeId) => {
    const { name, value } = event.target;
    setNuevoLider({
      ...nuevoLider,
      Personaje: nuevoLider.Personaje.map((personaje) =>
        personaje.id === personajeId ? { ...personaje, [name]: value } : personaje
      ),
    });
  };

  return (
    <div className='AgregarLider'>
      <h2 className='TituloSugerencia'>Sugerir Nuevo Líder:</h2>
      <label>
        Región:
        <input
          type="text"
          name="Region"
          value={nuevoLider.Region}
          onChange={handleInputChange}
        />
      </label>
      <br />
      
      {nuevoLider.Personaje.map((personaje, index) => (
        <div key={personaje.id}>
        <h3 className='Propuesta'>Propuesta</h3>
          <label>
            Nombre:
            <input
              type="text"
              name="texto"
              value={personaje.texto}
              onChange={(event) => handlePersonajeInputChange(event, personaje.id)}
            />
          </label>
          <br />
          <label>
            URL de la imagen del líder: {/* Cambiamos el campo de entrada para aceptar una URL */}
            <input
              type="text"
              name="Lider"
              value={personaje.Lider}
              onChange={(event) => handlePersonajeInputChange(event, personaje.id)}
            />
          </label>
          {personaje.Lider && (
            <img
              src={personaje.Lider}
              alt={`Imagen del líder ${personaje.texto}`}
              style={{ width: '100px', height: '100px' }}
            />
          )}
          <br />
          <label>
            URL de la imagen de la medalla: {/* Cambiamos el campo de entrada para aceptar una URL */}
            <input
              type="text"
              name="Medallas"
              value={personaje.Medallas}
              onChange={(event) => handlePersonajeInputChange(event, personaje.id)}
            />
          </label>
          {personaje.Medallas && (
            <img
              src={personaje.Medallas}
              alt={`Imagen de la medalla ${personaje.texto}`}
              style={{ width: '100px', height: '100px' }}
            />
          )}
          <br />
        </div>
      ))}

      <div className='BotonAgregar'>
        <button class="button-28" onClick={handleAgregarPersonaje} disabled={personajeAgregado}>Agregar Personaje</button>
        <br />
        <button class="button-28" onClick={handleAgregarLider}>Agregar Líder</button>
      </div>
    </div>
    
  );
};

export default AgregarLider;
