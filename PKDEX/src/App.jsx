import "./App.css";
import GymLeaders from "./GymLeaders";
import Header from "./Header";
import { Home } from "./Home";
import { NationalDex } from "./NationalDex";
import { TeamBuilder } from "./TeamBuilder";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

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
        <Link to='/NationalDex' >
          
        </Link>
        <Link to='/TeamBuilder' ></Link>
        <Link to='/GymLeaders' ></Link>


      <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/NationalDex" element={<NationalDex />} />

      <Route path="/TeamBuilder" element={<TeamBuilder />} />

      <Route path="/GymLeaders" element={<GymLeaders />} />



      </Routes>

    </BrowserRouter>

      </div>
    </div>
  );
}

export default App;



