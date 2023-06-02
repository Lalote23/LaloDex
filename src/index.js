import React from 'react';
import ReactDOM from 'react-dom';
import ListaUsuarios from './ListaUsuarios';

// Definir los registros de usuarios en el localStorage
localStorage.setItem(
  'usuario1@example.com',
  JSON.stringify({
    nombreUsuario: 'Usuario 1',
    correoElectronico: 'usuario1@example.com',
    contrasena: 'contrasena1',
  })
);

localStorage.setItem(
  'usuario2@example.com',
  JSON.stringify({
    nombreUsuario: 'Usuario 2',
    correoElectronico: 'usuario2@example.com',
    contrasena: 'contrasena2',
  })
);

localStorage.setItem(
  'usuario3@example.com',
  JSON.stringify({
    nombreUsuario: 'Usuario 3',
    correoElectronico: 'usuario3@example.com',
    contrasena: 'contrasena3',
  })
);

ReactDOM.render(<ListaUsuarios />, document.getElementById('root'));
