import React, { useState } from 'react';
import Header from './Header';
import { Login } from './Login'

export const LoginPage = () =>{


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
    

return(
    <>

    <Header/>

<Login usuariosAdicionales={usuariosAdicionales} />
</>


)}