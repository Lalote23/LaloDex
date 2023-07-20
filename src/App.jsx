import "./App.css";
import GymLeaders from "./GymLeaders";
import Header from "./Header";
import { Home } from "./Home";
import { NationalDex } from "./NationalDex";
import { TeamBuilder } from "./TeamBuilder";
import { Registro } from "./Registro";
import { ListaUsuarios } from "./ListaUsuarios";
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import { LoginPage } from "./LoginPage";

function App() {
  return (
    <div className="App">
      <div className="Header">


    {/* <Header/> 
    <NationalDex/>
    <TeamBuilder/>
    <GymLeaders/> */}

    <HashRouter>

        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/NationalDex" element={<NationalDex />} />
          <Route path="/TeamBuilder" element={<TeamBuilder />} />
          <Route path="/GymLeaders" element={<GymLeaders />} />
          <Route path="/ListaUsuarios" element={<ListaUsuarios />} />
          <Route path="/Registro" element={<Registro />} />   
          <Route path="/Login" element={<LoginPage />} />
        </Switch>
    </HashRouter>

      </div>
    </div>
  );
}

export default App;



