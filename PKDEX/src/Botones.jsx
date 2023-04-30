import { useState } from 'react';
import { Pokes } from './Pokes';
import { Esqueleto } from './Esqueleto';

function Carruseles({ imagenes, otrasImagenes, region }) {
  const [contador, setContador] = useState(0);
  
  // Funciones para cambiar el contador
  const nextHandler = () => {
    setContador(contador + 1);
  };
  const prevHandler = () => {
    setContador(contador - 1);
  };

  return (
    <>
      {/* Carrusel original */}
      <Pokes
        imagenes={imagenes}
        region={region}
        contador={contador}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />

      {/* Nuevo carrusel */}
      <Esqueleto
        imagenes={otrasImagenes}
        contador={contador}
        nextHandler={nextHandler}
        prevHandler={prevHandler}
      />
    </>
  );
}

function App() {
  const imagenes = [...];
  const otrasImagenes = [...];

  return (
    <div>
      <Carruseles imagenes={imagenes} otrasImagenes={otrasImagenes} region="Kanto" />
    </div>
  );
}
