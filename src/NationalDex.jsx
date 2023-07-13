import "./App.css"
import React, { useState, lazy, Suspense }   from "react"
import { Pokes }             from "./Pokes.jsx"
import { Esqueleto }         from "./Esqueleto.jsx"
import ControlBotones        from "./ControlBotones"
import { Dex }               from "./dataBase"
import { Device }            from "./dataBase"
import { Datos }             from "./dataBase"
import { Kanto }             from "./TipoDebil.jsx"
import { Johto }             from "./TipoDebil.jsx"
import { Hoenn }             from "./TipoDebil.jsx"
import { Sinnoh }            from "./TipoDebil.jsx"
import { TeseliaUnova }      from "./TipoDebil.jsx"
import { Kalos }             from "./TipoDebil.jsx"
import { Alola }             from "./TipoDebil.jsx"
import { Galar }             from "./TipoDebil.jsx"
import { Paldea }            from "./TipoDebil.jsx"
import Header from "./Header"





export const NationalDex = () => {
  const [ contadorKanto         ] = useState(0)
  const [ contadorJohto         ] = useState(0)
  const [ contadorHoenn         ] = useState(0)
  const [ contadorSinnoh        ] = useState(0)
  const [ contadorTeseliaUnova  ] = useState(0)
  const [ contadorKalos         ] = useState(0)
  const [ contadorAlola         ] = useState(0)
  const [ contadorGalar         ] = useState(0)
  const [ contadorPaldea        ] = useState(0)


  



// BUSQUEDA

const [   searchTerm,         setSearchTerm           ] = useState("")
const [   activeIndexKanto,   setActiveIndexKanto     ] = useState(0)
const [   activeIndexJohto,   setActiveIndexJohto     ] = useState(0)
const [   activeIndexHoenn,   setActiveIndexHoenn     ] = useState(0)
const [   activeIndexSinnoh,  setActiveIndexSinnoh    ] = useState(0)
const [   activeIndexUnova,   setActiveIndexUnova     ] = useState(0)
const [   activeIndexKalos,   setActiveIndexKalos     ] = useState(0)
const [   activeIndexAlola,   setActiveIndexAlola     ] = useState(0)
const [   activeIndexGalar,   setActiveIndexGalar     ] = useState(0)
const [   activeIndexPaldea,  setActiveIndexPaldea    ] = useState(0)

const handleChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredImages = Dex.RegionDex[1].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDevice = Device.RegionDevice[1].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);


{/* =============================KANTO================================ */}


const filteredImagesKanto = Dex.RegionDex[0].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceKanto = Device.RegionDevice[0].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);




{/* =============================JOHTO================================ */}


const filteredImagesJohto = Dex.RegionDex[1].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceJohto = Device.RegionDevice[1].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);



{/* =============================HOENN================================ */}


const filteredImagesHoenn = Dex.RegionDex[2].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceHoenn = Device.RegionDevice[2].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);



{/* =============================SINNOH================================ */}


const filteredImagesSinnoh = Dex.RegionDex[3].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceSinnoh = Device.RegionDevice[3].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);



{/* =============================TESELIA/UNOVA================================ */}


const filteredImagesUnova = Dex.RegionDex[4].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceUnova = Device.RegionDevice[4].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);




{/* =============================KALOS================================ */}


const filteredImagesKalos = Dex.RegionDex[5].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceKalos = Device.RegionDevice[5].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);


{/* =============================ALOLA================================ */}


const filteredImagesAlola = Dex.RegionDex[6].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceAlola = Device.RegionDevice[6].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);


{/* =============================GALAR================================ */}


const filteredImagesGalar = Dex.RegionDex[7].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDeviceGalar= Device.RegionDevice[7].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);


{/* =============================PALDEA================================ */}


const filteredImagesPaldea = Dex.RegionDex[8].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredDevicePaldea = Device.RegionDevice[8].imagenes.filter((imagen) =>
  imagen.texto.toLowerCase().includes(searchTerm.toLowerCase())
);



  const regionKanto = Dex.RegionDex.find((region) => region.Region === "Kanto");
  const regionJohto = Dex.RegionDex.find((region) => region.Region === "Johto");
  const regionHoenn = Dex.RegionDex.find((region) => region.Region === "Hoenn");
  const regionSinnoh = Dex.RegionDex.find((region) => region.Region === "Sinnoh");
  const regionTeseliaUnova = Dex.RegionDex.find((region) => region.Region === "TeseliaUnova");
  const regionKalos = Dex.RegionDex.find((region) => region.Region === "Kalos");
  const regionAlola = Dex.RegionDex.find((region) => region.Region === "Alola");
  const regionGalar = Dex.RegionDex.find((region) => region.Region === "Galar");
  const regionPaldea = Dex.RegionDex.find((region) => region.Region === "Paldea");




  //====================KANTO=======================


  const handleNextKanto = () => {
    setActiveIndexKanto((prevIndex) =>
      prevIndex === filteredImagesKanto.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevKanto = () => {
    setActiveIndexKanto((prevIndex) =>
      prevIndex === 0 ? filteredImagesKanto.length - 1 : prevIndex - 1
    );
  };

  const transformValueDeviceKanto = () =>{
    return `translateX(-${(100 / filteredImagesKanto.length) * activeIndexKanto}%)`;
  };
  
    const transformValueDexKanto = () => {
      return `translateX(-${(100 / filteredImagesKanto.length) * activeIndexKanto}%)`;
    };

  //====================JOHTO=======================

  const handleNextJohto = () => {
    setActiveIndexJohto((prevIndex) =>
      prevIndex === filteredImagesJohto.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevJohto = () => {
    setActiveIndexJohto((prevIndex) =>
      prevIndex === 0 ? filteredImagesJohto.length - 1 : prevIndex - 1
    );
  };

  const transformValueDeviceJohto = () =>{
    return `translateX(-${(100 / filteredImagesJohto.length) * activeIndexJohto}%)`;
  };
  
    const transformValueDexJohto = () => {
      return `translateX(-${(100 / filteredImagesJohto.length) * activeIndexJohto}%)`;
    };
  

  //====================HOENN=======================

  const handleNextHoenn = () => {
    setActiveIndexHoenn((prevIndex) =>
      prevIndex === filteredImagesHoenn.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevHoenn = () => {
    setActiveIndexHoenn((prevIndex) =>
      prevIndex === 0 ? filteredImagesHoenn.length - 1 : prevIndex - 1
    );
  };

  const transformValueDeviceHoenn = () =>{
    return `translateX(-${(100 / filteredImagesHoenn.length) * activeIndexHoenn}%)`;
  };
  
    const transformValueDexHoenn = () => {
      return `translateX(-${(100 / filteredImagesHoenn.length) * activeIndexHoenn}%)`;
    };

    //====================SINNOH=======================

    const handleNextSinnoh = () => {
      setActiveIndexSinnoh((prevIndex) =>
        prevIndex === filteredImagesSinnoh.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevSinnoh = () => {
      setActiveIndexSinnoh((prevIndex) =>
        prevIndex === 0 ? filteredImagesSinnoh.length - 1 : prevIndex - 1
      );
    };
  
    const transformValueDeviceSinnoh = () =>{
      return `translateX(-${(100 / filteredImagesSinnoh.length) * activeIndexSinnoh}%)`;
    };
    
      const transformValueDexSinnoh = () => {
        return `translateX(-${(100 / filteredImagesSinnoh.length) * activeIndexSinnoh}%)`;
      };

    //====================TESELIA/UNOVA=======================


    const handleNextTeseliaUnova = () => {
      setActiveIndexUnova((prevIndex) =>
        prevIndex === filteredImagesUnova.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevTeseliaUnova = () => {
      setActiveIndexUnova((prevIndex) =>
        prevIndex === 0 ? filteredImagesUnova.length - 1 : prevIndex - 1
      );
    };

    const transformValueDeviceTeseliaUnova = () =>{
      return `translateX(-${(100 / filteredImagesUnova.length) * activeIndexUnova}%)`;
    };
    
      const transformValueDexTeseliaUnova = () => {
        return `translateX(-${(100 / filteredImagesUnova.length) * activeIndexUnova}%)`;
      };

      //====================KALOS=======================


      const handleNextKalos = () => {
        setActiveIndexKalos((prevIndex) =>
          prevIndex === filteredImagesKalos.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevKalos = () => {
        setActiveIndexKalos((prevIndex) =>
          prevIndex === 0 ? filteredImagesKalos.length - 1 : prevIndex - 1
        );
      };
  
      const transformValueDeviceKalos = () =>{
        return `translateX(-${(100 / filteredImagesKalos.length) * activeIndexKalos}%)`;
      };
      
        const transformValueDexKalos = () => {
          return `translateX(-${(100 / filteredImagesKalos.length) * activeIndexKalos}%)`;
        };
    

        //====================ALOLA=======================


        const handleNextAlola = () => {
          setActiveIndexAlola((prevIndex) =>
            prevIndex === filteredImagesAlola.length - 1 ? 0 : prevIndex + 1
          );
        };
      
        const handlePrevAlola = () => {
          setActiveIndexAlola((prevIndex) =>
            prevIndex === 0 ? filteredImagesAlola.length - 1 : prevIndex - 1
          );
        };
    
        const transformValueDeviceAlola = () =>{
          return `translateX(-${(100 / filteredImagesAlola.length) * activeIndexAlola}%)`;
        };
        
          const transformValueDexAlola = () => {
            return `translateX(-${(100 / filteredImagesAlola.length) * activeIndexAlola}%)`;
          };
      

          //====================GALAR=======================


    const handleNextGalar = () => {
      setActiveIndexGalar((prevIndex) =>
        prevIndex === filteredImagesGalar.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevGalar = () => {
      setActiveIndexGalar((prevIndex) =>
        prevIndex === 0 ? filteredImagesGalar.length - 1 : prevIndex - 1
      );
    };

    const transformValueDeviceGalar = () =>{
      return `translateX(-${(100 / filteredImagesGalar.length) * activeIndexGalar}%)`;
    };
    
      const transformValueDexGalar = () => {
        return `translateX(-${(100 / filteredImagesGalar.length) * activeIndexGalar}%)`;
      };
  

      //====================PALDEA=======================


      const handleNextPaldea = () => {
        setActiveIndexPaldea((prevIndex) =>
          prevIndex === filteredImagesPaldea.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevPaldea = () => {
        setActiveIndexPaldea((prevIndex) =>
          prevIndex === 0 ? filteredImagesPaldea.length - 1 : prevIndex - 1
        );
      };
  
      const transformValueDevicePaldea = () =>{
        return `translateX(-${(100 / filteredImagesPaldea.length) * activeIndexPaldea}%)`;
      };
      
        const transformValueDexPaldea = () => {
          return `translateX(-${(100 / filteredImagesPaldea.length) * activeIndexPaldea}%)`;
        };
    
    // ===================================================






  return (
    <div className="App">

    <Header/>

      <div className="Header">

      {/* <input
        type="text"
        onChange={handleChange}
        placeholder="Buscar Pokémon..."
      /> */}

      </div>

      {/* ==============================KANTO============================= */}

      <div className="Region">
        <h1>{regionKanto.Region}</h1>
      </div>
     

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesKanto.length}%`,
              transform: transformValueDeviceKanto(),
            }}
          >

           <Kanto/>


            
          </div>
        </div>
      </div>


      <div className="AllDex">

        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesKanto.length}%`,
              transform: transformValueDeviceKanto(),
            }}
          >

            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceKanto.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesKanto.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorKanto}
              handleNext={handleNextKanto}
              handlePrev={handlePrevKanto}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesKanto.length}%`,
              transform: transformValueDexKanto(),
            }}
          >

            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesKanto.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesKanto.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>


            <div className="Carrousel-num">
            {filteredImagesKanto.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesKanto.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* =============================JOHTO================================ */}

      <div className="Region">
        <h1>{regionJohto.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesJohto.length}%`,
              transform: transformValueDeviceJohto(),
            }}
          >

           <Johto/>


            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesJohto.length}%`,
              transform: transformValueDeviceJohto(),
            }}
          >


            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceJohto.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesJohto.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorJohto}
              handleNext={handleNextJohto}
              handlePrev={handlePrevJohto}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesJohto.length}%`,
              transform: transformValueDexJohto(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesJohto.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesJohto.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesJohto.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesJohto.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =============================HOENN================================ */}


            <div className="Region">
        <h1>{regionHoenn.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesHoenn.length}%`,
              transform: transformValueDeviceHoenn(),
            }}
          >
            
              <Hoenn/>
            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesHoenn.length}%`,
              transform: transformValueDeviceHoenn(),
            }}
          >

            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceHoenn.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesHoenn.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorHoenn}
              handleNext={handleNextHoenn}
              handlePrev={handlePrevHoenn}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesHoenn.length}%`,
              transform: transformValueDexHoenn(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesHoenn.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesHoenn.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesHoenn.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesHoenn.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =============================SINNOH================================ */}


      <div className="Region">
        <h1>{regionSinnoh.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesSinnoh.length}%`,
              transform: transformValueDeviceSinnoh(),
            }}
          >
            
              <Sinnoh/>
            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesSinnoh.length}%`,
              transform: transformValueDeviceSinnoh(),
            }}
          >


            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceSinnoh.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesSinnoh.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorSinnoh}
              handleNext={handleNextSinnoh}
              handlePrev={handlePrevSinnoh}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesSinnoh.length}%`,
              transform: transformValueDexSinnoh(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesSinnoh.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesSinnoh.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesSinnoh.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesSinnoh.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* =============================TESELIA/UNOVA================================ */}


      <div className="Region">
        <h1>{regionTeseliaUnova.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${filteredImagesUnova.length * 100}%`,
              transform: transformValueDeviceTeseliaUnova(),
            }}
          >
            
              <TeseliaUnova/>
            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${filteredImagesUnova.length * 100}%`,
              transform: transformValueDeviceTeseliaUnova(),
            }}
          >


            <div className="Esqueleto">
              <div className="Esqueleto-container">
                {filteredDeviceUnova.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-Sinnoh"
                    style={{ width: `${(100 / filteredImagesUnova.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorTeseliaUnova}
              handleNext={handleNextTeseliaUnova}
              handlePrev={handlePrevTeseliaUnova}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${filteredImagesUnova.length * 100}%`,
              transform: transformValueDexTeseliaUnova(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
                {filteredImagesUnova.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgSinnoh"
                    style={{ width: `${(100 / filteredImagesUnova.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesUnova.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesUnova.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>







      {/* =============================KALOS================================ */}

      <div className="Region">
        <h1>{regionKalos.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesKalos.length}%`,
              transform: transformValueDeviceKalos(),
            }}
          >

           <Kalos/>


            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesKalos.length}%`,
              transform: transformValueDeviceKalos(),
            }}
          >
            {/* {RegionDevice.map((eachKantoDex) => (
              <Esqueleto key={eachKantoDex.id} {...eachKantoDex}
              
              Dex.RegionDex[1].imagenes.length/>
            ))} */}

            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceKalos.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesKalos.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorKalos}
              handleNext={handleNextKalos}
              handlePrev={handlePrevKalos}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesKalos.length}%`,
              transform: transformValueDexKalos(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesKalos.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesKalos.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesKalos.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesKalos.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>




      {/* =============================ALOLA================================ */}

      <div className="Region">
        <h1>{regionAlola.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesAlola.length}%`,
              transform: transformValueDeviceAlola(),
            }}
          >

           <Alola/>


            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesAlola.length}%`,
              transform: transformValueDeviceAlola(),
            }}
          >
            {/* {RegionDevice.map((eachKantoDex) => (
              <Esqueleto key={eachKantoDex.id} {...eachKantoDex}
              
              Dex.RegionDex[1].imagenes.length/>
            ))} */}

            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceAlola.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesAlola.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorAlola}
              handleNext={handleNextAlola}
              handlePrev={handlePrevAlola}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesAlola.length}%`,
              transform: transformValueDexAlola(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesAlola.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesAlola.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesAlola.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesAlola.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* =============================GALAR================================ */}

      <div className="Region">
        <h1>{regionGalar.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesGalar.length}%`,
              transform: transformValueDeviceGalar(),
            }}
          >

           <Galar/>


            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesGalar.length}%`,
              transform: transformValueDeviceGalar(),
            }}
          >

            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDeviceGalar.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesGalar.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorGalar}
              handleNext={handleNextGalar}
              handlePrev={handlePrevGalar}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesGalar.length}%`,
              transform: transformValueDexGalar(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesGalar.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesGalar.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesGalar.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesGalar.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =============================PALDEA================================ */}

      <div className="Region">
        <h1>{regionPaldea.Region}</h1>
      </div>

      <div className="TypeDe">
        <div className="CarrouselTypeJohto">
          <div
            className="Carrousel-TypeDeb"
            style={{
              width: `${100 * filteredImagesPaldea.length}%`,
              transform: transformValueDevicePaldea(),
            }}
          >

           <Paldea/>


            
          </div>
        </div>
      </div>

      <div className="AllDex">
        <div className="CarrouselDevice">
          <div
            className="Carrousel-container"
            style={{
              width: `${100 * filteredImagesPaldea.length}%`,
              transform: transformValueDevicePaldea(),
            }}
          >


            <div className="Esqueleto">
              <div className="Esqueleto-container">
              {filteredDevicePaldea.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Esqueleto-johto"
                    style={{ width: `${(100 / filteredImagesPaldea.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="CarrouselKanto">
          <div className="Botones">
            <ControlBotones
              contador={contadorPaldea}
              handleNext={handleNextPaldea}
              handlePrev={handlePrevPaldea}
            />

          </div>

          <div
            className="Carrousel-container johto-slider"
            style={{
              width: `${100 * filteredImagesPaldea.length}%`,
              transform: transformValueDexPaldea(),
            }}
          >
            <div className="PokesKanto">
              <div className="PokesKanto-container">
              {filteredImagesPaldea.map((imagen) => (
                  <img
                    key={imagen.id}
                    {...imagen}
                    className="Carrousel-imgJohto"
                    style={{ width: `${(100 / filteredImagesPaldea.length / 1.7880794702)}%` }}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>

            <div className="Carrousel-num">
            {filteredImagesPaldea.map((numero) => (
                <h3 className="" key={numero.id}>
                  {numero.num}
                </h3>
              ))}
            </div>

            <div className="Carrousel-h3">
            {filteredImagesPaldea.map((textos) => (
                <h3 className="" key={textos.id}>
                  {textos.texto}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </div>










    </div>
  );
}


