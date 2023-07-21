import React, { useState } from 'react';
import "./Login.css"

export const Login = ({usuariosAdicionales}) => {
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleLogin = (e) => {
    e.preventDefault();

    // Obtener todos los registros de usuarios del localStorage
    const registros = Object.values(localStorage);
    const usuariosLocalStorage = registros.map((registro) => JSON.parse(registro));
    
    // Convertir las cadenas JSON en objetos JavaScript
    const usuarios = usuariosLocalStorage.concat(usuariosAdicionales);
    

    // Verificar las credenciales del usuario
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.correoElectronico === correoElectronico &&
        usuario.contrasena === contrasena
    );

    if (usuarioEncontrado) {
      // Inicio de sesión exitoso
      setIsLoggedIn(true);
      alert('Login Exitoso!');
    } else {
      // Credenciales incorrectas
      alert('Credenciales incorrectas');
    }

    // Limpiar los campos del formulario
    setCorreoElectronico('');
    setContrasena('');
  };

  if (isLoggedIn) {
    return <> <p className='Inicio'>¡Bienvenido Profesor!</p> 
    <div className='PikaDiv'><img className='PikaCumple' src="media/dex/Pokes/Pika.png" alt="Pika Cumple" /></div>
    </>
  }

  return (
    <>

    <div className='Login'>
    <form onSubmit={handleLogin}>
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
          onChange={(e) => setContrasena(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
    </div>

    <footer>
      <img className='Rotom' src="media/dex/Pokes/Rotom.png" alt="Rotom Dex" />
    </footer>

    </>
    

  );
};

export default Login
