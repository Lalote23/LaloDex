import React, { useEffect, useState } from 'react';
import "./ListaUsuarios.css";
import Header from './Header';

export const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

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

  useEffect(() => {
    const registrosLocalStorage = Object.entries(localStorage);

    // Filtrar solo los usuarios registrados 
    const usuariosLocalStorage = registrosLocalStorage
      .filter(([key]) => key.startsWith('usuariosRegistrados_'))
      .map(([, registro]) => JSON.parse(registro));

    // Combinar usuarios registrados con usuarios adicionales
    setUsuarios([...usuariosLocalStorage, ...usuariosAdicionales]);
  }, []);

  const eliminarUsuario = (index) => {
    const nuevosUsuarios = [...usuarios];
    nuevosUsuarios.splice(index, 1);
    setUsuarios(nuevosUsuarios);
  
    const registrosLocalStorage = nuevosUsuarios.map((usuario) => JSON.stringify(usuario));
    Object.keys(localStorage).forEach((key) => {
      const registro = localStorage.getItem(key);
      if (!registrosLocalStorage.includes(registro)) {
        localStorage.removeItem(key);
      }
    });
  };

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
                <th>Acciones:</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr className='listadoUsuarios' key={index}>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.correoElectronico}</td>
                  <td>{usuario.contrasena}</td>
                  <td><button onClick={() => eliminarUsuario(index)}>Eliminar</button></td>
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
