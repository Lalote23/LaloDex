import React, { useState } from 'react';
import Header from './Header';
import Login from './Login';
import "./Registro.css"

export const Registro = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();

    // Crear un objeto con los valores del formulario
    const usuario = {
      nombreUsuario,
      correoElectronico,
      contrasena,
    };

    // Almacenar el objeto en el localStorage
    localStorage.setItem(correoElectronico, JSON.stringify(usuario));

    // Limpiar los campos del formulario
    setNombreUsuario('');
    setCorreoElectronico('');
    setContrasena('');

    alert('Registro exitoso');
  };

  return (

    <><div>
    <Header />
  </div>

  <div className='Login'>
    <form onSubmit={handleRegistro}>
      <label className='Label'>
        Nombre de usuario:
        <input
          type="text"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
      </label>
      <br />
      <label className='Label'>
        Correo electrónico:
        <input
          type="email"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
      </label>
      <br />
      <label className='Label'> 
        Contraseña:
        <input
          type="password"
          value={contrasena}
          minlength="8"
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
    </div>


    </>
  )
}


export default Registro
