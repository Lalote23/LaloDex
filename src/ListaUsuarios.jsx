import React, { useEffect, useState } from 'react';
import "./ListaUsuarios.css";
import Header from './Header';
import { Login } from './Login'

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const registros = Object.values(localStorage);
    const usuariosLocalStorage = registros.map((registro) => JSON.parse(registro));

    // Agregar los usuarios del localStorage a la lista de usuarios
    setUsuarios(usuariosLocalStorage.concat(usuariosAdicionales));
  }, []);

  // Definir los usuarios adicionales
  const usuariosAdicionales = [
    {
      nombreUsuario: "P.Oak",
      correoElectronico: "oak_kanto@dex.com",
      contrasena: "Kanto01",
    },
    {
      nombreUsuario: "P.Kukui",
      correoElectronico: "kukui_alola@dex.com",
      contrasena: "Alola07",
    },
    {
      nombreUsuario: "P.Turo",
      correoElectronico: "turo_paldea@dex.com",
      contrasena: "Paldea10",
    },
  ];

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

      <Login usuariosAdicionales={usuariosAdicionales} />
    </>
  );
};

export default ListaUsuarios;
