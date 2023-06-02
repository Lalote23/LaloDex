import React, { useEffect, useState } from 'react';
import Header from './Header';

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener todos los registros de usuarios del localStorage
    const registros = Object.values(localStorage.getItem('usuarios'));

    // Convertir las cadenas JSON en objetos JavaScript
    const usuarios = registros.map((registro) => JSON.parse(registro));

    // Actualizar el estado de usuarios
    setUsuarios(usuarios);
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className='Usuarios'>
        <h2>Lista de usuarios registrados:</h2>
        {usuarios.length > 0 ? (
          <table className='RegistroUsuarios'>
            <thead>
              <tr className='listadoUsuarios'>
                <th>Nombre de usuario:</th>
                <th>Correo electrónico:</th>
                <th>Contraseña:</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr className='listadoUsuarios' key={index}>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.correoElectronico}</td>
                  <td>{usuario.contrasena}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay usuarios registrados.</p>
        )}
      </div>
    </>
  );
};

export default ListaUsuarios;
