import React, { useState } from 'react';

export const Login = () => {
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Obtener todos los registros de usuarios del localStorage
    const registros = Object.values(localStorage);
  
    // Convertir las cadenas JSON en objetos JavaScript
    const usuarios = registros.map((registro) => JSON.parse(registro));
  
    // Convertir el correo electrónico ingresado a minúsculas
    const correoElectronicoLower = correoElectronico.toLowerCase();
  
    // Verificar las credenciales del usuario
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.correoElectronico.toLowerCase() === correoElectronicoLower &&
        usuario.contrasena === contrasena
    );
  
    if (usuarioEncontrado) {
      // Inicio de sesión exitoso
      setIsLoggedIn(true);
      alert('Inicio de sesión exitoso');
    } else {
      // Credenciales incorrectas
      alert('Credenciales incorrectas');
    }
  
    // Limpiar los campos del formulario
    setCorreoElectronico('');
    setContrasena('');
  };

  
  if (isLoggedIn) {
    return <p>¡Ya has iniciado sesión!</p>;
  }

  return (
    <form onSubmit={handleLogin}>
      <label>
        Correo electrónico:
        <input
          type="email"
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
        />
      </label>
      <br />
      <label>
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
  )
}

export default Login
