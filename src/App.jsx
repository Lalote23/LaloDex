import "./App.css";
import GymLeaders from "./GymLeaders";
import Header from "./Header";
import { Home } from "./Home";
import { NationalDex } from "./NationalDex";
import { TeamBuilder } from "./TeamBuilder";
import { Registro } from "./Registro";
import { ListaUsuarios } from "./ListaUsuarios";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import { LoginPage } from "./LoginPage";
import Agregar from "./Agregar_lider";


function App() {
  return (
    <div className="App">
      <div className="Header">


    {/* <Header/> 
    <NationalDex/>
    <TeamBuilder/>
    <GymLeaders/> */}

    <BrowserRouter>



        <Link to='/' ></Link>
        <Link to='/NationalDex'></Link>
        <Link to='/TeamBuilder'></Link>
        <Link to='/GymLeaders'></Link>
        <Link to='/Registro'></Link>
        <Link to='/ListaUsuarios'></Link>
        <Link to='/Login'></Link>
        <Link to='/Agregar'>Agregar</Link>





      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/NationalDex" element={<NationalDex />} />

      <Route path="/TeamBuilder" element={<TeamBuilder />} />

      <Route path="/GymLeaders" element={<GymLeaders />} />

      <Route path="/ListaUsuarios" element={<ListaUsuarios />} />

      <Route path="/Registro" element={<Registro />} />
      
      <Route path="/Login" element={<LoginPage />} />

      <Route path="/Agregar" element={<Agregar /> } />

    



      </Routes>

    </BrowserRouter>

      </div>
    </div>
  );
}

export default App;



