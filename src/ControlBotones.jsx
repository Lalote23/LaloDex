import React from "react";
import { useState } from "react";
import { Pokes } from "./Pokes";
import { Esqueleto } from "./Esqueleto";

const ControlBotones = ({ contador,   handleNext, handlePrev}) => {
  return (
    <>
      <div>
        <button onClick={handlePrev} className="Anterior">
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button onClick={handleNext} className="Siguiente">
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>


    </>
  );
};

export default ControlBotones
