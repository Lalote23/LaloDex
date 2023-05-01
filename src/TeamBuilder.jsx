import React, { useState } from 'react';
import './TeamBuilder.css';
import { General } from './dataBase';
import { Datos } from './dataBase';
import Header from './Header';


export const TeamBuilder = () => {
  const [nombrePokemon1, setNombrePokemon1] = useState('');
  const [imagenLider1, setImagenLider1] = useState(null);
  const [pokemonEnNumero1, setPokemonEnNumero1] = useState(null);
  
  const [nombrePokemon2, setNombrePokemon2] = useState('');
  const [imagenLider2, setImagenLider2] = useState(null);
  const [pokemonEnNumero2, setPokemonEnNumero2] = useState(null);

  const [nombrePokemon3, setNombrePokemon3] = useState('');
  const [imagenLider3, setImagenLider3] = useState(null);
  const [pokemonEnNumero3, setPokemonEnNumero3] = useState(null);

  const [nombrePokemon4, setNombrePokemon4] = useState('');
  const [imagenLider4, setImagenLider4] = useState(null);
  const [pokemonEnNumero4, setPokemonEnNumero4] = useState(null);

  const [nombrePokemon5, setNombrePokemon5] = useState('');
  const [imagenLider5, setImagenLider5] = useState(null);
  const [pokemonEnNumero5, setPokemonEnNumero5] = useState(null);

  const [nombrePokemon6, setNombrePokemon6] = useState('');
  const [imagenLider6, setImagenLider6] = useState(null);
  const [pokemonEnNumero6, setPokemonEnNumero6] = useState(null);


  const [mostrarDiv1, setMostrarDiv1] = useState(false)
  const handleClick1 = () => {setMostrarDiv1(!mostrarDiv1);
    const boton1 = document.querySelector('.image1');
     boton1.classList.add('oculto');
  }

  const [mostrarDiv2, setMostrarDiv2] = useState(false)
  const handleClick2 = () => {setMostrarDiv2(!mostrarDiv2);
    const boton2 = document.querySelector('.image2');
     boton2.classList.add('oculto');
  }

  const [mostrarDiv3, setMostrarDiv3] = useState(false)
  const handleClick3 = () => {setMostrarDiv3(!mostrarDiv3);
    const boton3 = document.querySelector('.image3');
     boton3.classList.add('oculto');
  }

  const [mostrarDiv4, setMostrarDiv4] = useState(false)
  const handleClick4 = () => {setMostrarDiv4(!mostrarDiv4);
    const boton4 = document.querySelector('.image4');
     boton4.classList.add('oculto');
  }

  const [mostrarDiv5, setMostrarDiv5] = useState(false)
  const handleClick5 = () => {setMostrarDiv5(!mostrarDiv5);
    const boton5 = document.querySelector('.image5');
     boton5.classList.add('oculto');
  }

  const [mostrarDiv6, setMostrarDiv6] = useState(false)
  const handleClick6 = () => {setMostrarDiv6(!mostrarDiv6);
    const boton6 = document.querySelector('.image6');
     boton6.classList.add('oculto');
  }

// ==========================1=================================
  const handleNumeroChange1 = (event) => {
    const numeroPokemon1 = parseInt(event.target.value);
    const pokemonEncontrado1 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === numeroPokemon1
    );


    if (pokemonEncontrado1) {
      setNombrePokemon1(pokemonEncontrado1.texto);
      setPokemonEnNumero1(pokemonEncontrado1);
      setImagenLider1(pokemonEncontrado1.src);
    } else {
      setNombrePokemon1('');
      setPokemonEnNumero1(null);
      setImagenLider1(null);
    }
  };


  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    const numero = event.target.Numero.value;

    if (pokemonEnNumero1) {
      const pokemonEncontrado1 = General.AllPokes[0].imagenes.find(
        (pokemon) => pokemon.id === pokemonEnNumero1.id
      );
      
      if (pokemonEncontrado1) {
        const imagenEncontrada1 = pokemonEncontrado1.src;
        const nombreEncontrado1 = pokemonEncontrado1.texto;

        setImagenLider1(imagenEncontrada1);
        setNombrePokemon1(nombreEncontrado1);
      } else {
        setImagenLider1(null);
        setNombrePokemon1('');
      }
    } else {
      setImagenLider1(null);
      setNombrePokemon1('');
    }
  
  };


  const handleNumeroBlur1 = (event) => {
    const numeroPokemon1 = parseInt(event.target.value);
    const pokemonEncontrado1 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === numeroPokemon1
    );
  
    if (pokemonEncontrado1) {
      setImagenLider1(pokemonEncontrado1.src);
      setNombrePokemon1(pokemonEncontrado1.texto);
      setPokemonEnNumero1(pokemonEncontrado1);
    } else {
      setImagenLider1(null);
      setNombrePokemon1('');
      setPokemonEnNumero1(null);
    }
  };


// ==========================2=================================
const handleNumeroChange2 = (event) => {
  const numeroPokemon2 = parseInt(event.target.value);
  const pokemonEncontrado2 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon2
  );


  if (pokemonEncontrado2) {
    setNombrePokemon2(pokemonEncontrado2.texto);
    setPokemonEnNumero2(pokemonEncontrado2);
    setImagenLider2(pokemonEncontrado2.src);
  } else {
    setNombrePokemon2('');
    setPokemonEnNumero2(null);
    setImagenLider2(null);
  }
};


const handleFormSubmit2 = (event) => {
  event.preventDefault();
  const numero = event.target.Numero.value;

  if (pokemonEnNumero2) {
    const pokemonEncontrado2 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === pokemonEnNumero2.id
    );
    
    if (pokemonEncontrado2) {
      const imagenEncontrada2 = pokemonEncontrado2.src;
      const nombreEncontrado2 = pokemonEncontrado2.texto;

      setImagenLider2(imagenEncontrada2);
      setNombrePokemon2(nombreEncontrado2);
    } else {
      setImagenLider2(null);
      setNombrePokemon2('');
    }
  } else {
    setImagenLider2(null);
    setNombrePokemon2('');
  }

};


const handleNumeroBlur2 = (event) => {
  const numeroPokemon2 = parseInt(event.target.value);
  const pokemonEncontrado2 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon2
  );

  if (pokemonEncontrado2) {
    setImagenLider2(pokemonEncontrado2.src);
    setNombrePokemon2(pokemonEncontrado2.texto);
    setPokemonEnNumero2(pokemonEncontrado2);
  } else {
    setImagenLider2(null);
    setNombrePokemon2('');
    setPokemonEnNumero2(null);
  }
};


// ==========================3=================================
const handleNumeroChange3 = (event) => {
  const numeroPokemon3 = parseInt(event.target.value);
  const pokemonEncontrado3 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon3
  );


  if (pokemonEncontrado3) {
    setNombrePokemon3(pokemonEncontrado3.texto);
    setPokemonEnNumero3(pokemonEncontrado3);
    setImagenLider3(pokemonEncontrado3.src);
  } else {
    setNombrePokemon3('');
    setPokemonEnNumero3(null);
    setImagenLider3(null);
  }
};


const handleFormSubmit3 = (event) => {
  event.preventDefault();
  const numero = event.target.Numero.value;

  if (pokemonEnNumero3) {
    const pokemonEncontrado3 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === pokemonEnNumero3.id
    );
    
    if (pokemonEncontrado3) {
      const imagenEncontrada3 = pokemonEncontrado3.src;
      const nombreEncontrado3 = pokemonEncontrado3.texto;

      setImagenLider3(imagenEncontrada3);
      setNombrePokemon3(nombreEncontrado3);
    } else {
      setImagenLider3(null);
      setNombrePokemon3('');
    }
  } else {
    setImagenLider3(null);
    setNombrePokemon3('');
  }

};


const handleNumeroBlur3 = (event) => {
  const numeroPokemon3 = parseInt(event.target.value);
  const pokemonEncontrado3 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon3
  );

  if (pokemonEncontrado3) {
    setImagenLider3(pokemonEncontrado3.src);
    setNombrePokemon3(pokemonEncontrado3.texto);
    setPokemonEnNumero3(pokemonEncontrado3);
  } else {
    setImagenLider3(null);
    setNombrePokemon3('');
    setPokemonEnNumero3(null);
  }
};


// ==========================4=================================
const handleNumeroChange4 = (event) => {
  const numeroPokemon4 = parseInt(event.target.value);
  const pokemonEncontrado4 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon4
  );


  if (pokemonEncontrado4) {
    setNombrePokemon4(pokemonEncontrado4.texto);
    setPokemonEnNumero4(pokemonEncontrado4);
    setImagenLider4(pokemonEncontrado4.src);
  } else {
    setNombrePokemon4('');
    setPokemonEnNumero4(null);
    setImagenLider4(null);
  }
};


const handleFormSubmit4 = (event) => {
  event.preventDefault();
  const numero = event.target.Numero.value;

  if (pokemonEnNumero4) {
    const pokemonEncontrado4 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === pokemonEnNumero4.id
    );
    
    if (pokemonEncontrado4) {
      const imagenEncontrada4 = pokemonEncontrado4.src;
      const nombreEncontrado4 = pokemonEncontrado4.texto;

      setImagenLider4(imagenEncontrada4);
      setNombrePokemon4(nombreEncontrado4);
    } else {
      setImagenLider4(null);
      setNombrePokemon4('');
    }
  } else {
    setImagenLider4(null);
    setNombrePokemon4('');
  }

};


const handleNumeroBlur4 = (event) => {
  const numeroPokemon4 = parseInt(event.target.value);
  const pokemonEncontrado4 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon4
  );

  if (pokemonEncontrado4) {
    setNombrePokemon4(pokemonEncontrado4.src);
    setNombrePokemon4(pokemonEncontrado4.texto);
    setPokemonEnNumero4(pokemonEncontrado4);
  } else {
    setNombrePokemon4(null);
    setNombrePokemon4('');
    setPokemonEnNumero4(null);
  }
};


// ==========================5=================================
const handleNumeroChange5 = (event) => {
  const numeroPokemon5 = parseInt(event.target.value);
  const pokemonEncontrado5 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon5
  );


  if (pokemonEncontrado5) {
    setNombrePokemon5(pokemonEncontrado5.texto);
    setPokemonEnNumero5(pokemonEncontrado5);
    setImagenLider5(pokemonEncontrado5.src);
  } else {
    setNombrePokemon5('');
    setPokemonEnNumero5(null);
    setImagenLider5(null);
  }
};


const handleFormSubmit5 = (event) => {
  event.preventDefault();
  const numero = event.target.Numero.value;

  if (pokemonEnNumero5) {
    const pokemonEncontrado5 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === pokemonEnNumero5.id
    );
    
    if (pokemonEncontrado5) {
      const imagenEncontrada = pokemonEncontrado5.src;
      const nombreEncontrado = pokemonEncontrado5.texto;

      setImagenLider5(imagenEncontrada5);
      setNombrePokemon5(nombreEncontrado5);
    } else {
      setImagenLider5(null);
      setNombrePokemon5('');
    }
  } else {
    setImagenLider5(null);
    setNombrePokemon5('');
  }

};


const handleNumeroBlur5 = (event) => {
  const numeroPokemon5 = parseInt(event.target.value);
  const pokemonEncontrado5 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon5
  );

  if (pokemonEncontrado5) {
    setImagenLider5(pokemonEncontrado5.src);
    setNombrePokemon5(pokemonEncontrado5.texto);
    setPokemonEnNumero5(pokemonEncontrado5);
  } else {
    setImagenLider5(null);
    setNombrePokemon5('');
    setPokemonEnNumero5(null);
  }
};



// ==========================6=================================
const handleNumeroChange6 = (event) => {
  const numeroPokemon6 = parseInt(event.target.value);
  const pokemonEncontrado6 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon6
  );


  if (pokemonEncontrado6) {
    setNombrePokemon6(pokemonEncontrado6.texto);
    setPokemonEnNumero6(pokemonEncontrado6);
    setImagenLider6(pokemonEncontrado6.src);
  } else {
    setNombrePokemon6('');
    setPokemonEnNumero6(null);
    setImagenLider6(null);
  }
};


const handleFormSubmit6 = (event) => {
  event.preventDefault();
  const numero = event.target.Numero.value;

  if (pokemonEnNumero6) {
    const pokemonEncontrado6 = General.AllPokes[0].imagenes.find(
      (pokemon) => pokemon.id === pokemonEnNumero6.id
    );
    
    if (pokemonEncontrado6) {
      const imagenEncontrada6 = pokemonEncontrado6.src;
      const nombreEncontrado6 = pokemonEncontrado6.texto;

      setImagenLider6(imagenEncontrada6);
      setNombrePokemon6(nombreEncontrado6);
    } else {
      setImagenLider6(null);
      setNombrePokemon6('');
    }
  } else {
    setImagenLider6(null);
    setNombrePokemon6('');
  }

};


const handleNumeroBlur6 = (event) => {
  const numeroPokemon6 = parseInt(event.target.value);
  const pokemonEncontrado6 = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.id === numeroPokemon6
  );

  if (pokemonEncontrado6) {
    setImagenLider6(pokemonEncontrado6.src);
    setNombrePokemon6(pokemonEncontrado6.texto);
    setPokemonEnNumero6(pokemonEncontrado6);
  } else {
    setImagenLider6(null);
    setNombrePokemon6('');
    setPokemonEnNumero6(null);
  }
};







const indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const debilyfuerte = indices.forEach((index) => {
  const objeto = Datos.RegionTipo[index];
  if (objeto && objeto.TipoDeb) {
    console.log(objeto.TipoDeb.find((pokemon) => pokemon.texto));
  }
});

  const textoEncontrado = General.AllPokes[0].imagenes.find(
    (pokemon) => pokemon.texto
  )


  return (

    <><div>
      <Header />
    </div>
    
    <div className='AddContainer'>


        {/* ============================1================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              className='image1'
              onClick={handleClick1} />
          </button>

          {mostrarDiv1 && (
            <div className='Box'>
              <form onSubmit={handleFormSubmit1}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange1}
                    onBlur={handleNumeroBlur1} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon1} />
                </div>


                {imagenLider1 && <img src={imagenLider1} alt='imagen' />}

              </form>

            </div>

          )}
        </div>






        {/* ============================2================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              onClick={handleClick2}
              className='image2' />
          </button>

          {mostrarDiv2 && (
            <div className='Box'>
              <form onSubmit={handleFormSubmit2}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange2}
                    onBlur={handleNumeroBlur2} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon2} />
                </div>


                {imagenLider2 && <img src={imagenLider2} alt='imagen' />}

              </form>

            </div>
          )}

          <div className="Armatuteam">

          </div>

        </div>


        {/* ============================3================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              onClick={handleClick3}
              className='image3' />
          </button>

          {mostrarDiv3 && (

            <div className='Box'>
              <form onSubmit={handleFormSubmit3}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange3}
                    onBlur={handleNumeroBlur3} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon3} />
                </div>


                {imagenLider3 && <img src={imagenLider3} alt='imagen' />}

              </form>

            </div>
          )}

          <div className="Armatuteam">

          </div>

        </div>


        {/* ============================4================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              onClick={handleClick4}
              className='image4' />
          </button>
          {mostrarDiv4 && (
            <div className='Box'>
              <form onSubmit={handleFormSubmit4}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange4}
                    onBlur={handleNumeroBlur4} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon4} />
                </div>


                {imagenLider4 && <img src={imagenLider4} alt='imagen' />}

              </form>

            </div>
          )}
          <div className="Armatuteam">

          </div>

        </div>

        {/* ============================5================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              onClick={handleClick5}
              className='image5' />
          </button>
          {mostrarDiv5 && (
            <div className='Box'>
              <form onSubmit={handleFormSubmit5}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange5}
                    onBlur={handleNumeroBlur5} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon5} />
                </div>


                {imagenLider5 && <img src={imagenLider5} alt='imagen' />}

              </form>

            </div>
          )}
          <div className="Armatuteam">

          </div>

        </div>

        {/* ============================6================================== */}
        <div className='BotonDiv'>
          <button className='BotonAdd'>
            <img
              id='img-categoria'
              src='media/dex/Pokes/icons8-plus-512.png'
              alt=''
              onClick={handleClick6}
              className='image6' />
          </button>
          {mostrarDiv6 && (

            <div className='Box'>
              <form onSubmit={handleFormSubmit6}>
                <div className='Box'>
                  <label htmlFor='Numero'>Número: </label>
                  <input
                    type='number'
                    id='Numero'
                    name='Numero'
                    min='1'
                    max='1008'
                    onChange={handleNumeroChange6}
                    onBlur={handleNumeroBlur6} />
                  <p className='Reglas'>*NationalDex</p>
                </div>
                <div className='Box BoxNombre'>
                  <label htmlFor='Nombre'>Nombre: <br /> </label>
                  <input type="Text" id="Nombre" name="Nombre" value={nombrePokemon6} />
                </div>


                {imagenLider6 && <img src={imagenLider6} alt='imagen' />}

              </form>

            </div>
          )}
          <div className="Armatuteam">

          </div>

        </div>














      </div></>

  );
};

export default TeamBuilder;
