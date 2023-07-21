import { useState } from 'react';

export const useCarousel = (numFotos) => {
  const [contador, setContador] = useState(0)


  const nextHandler = () => {
    setContador((contador + 1))
  }

  const prevHandler = () => {
    setContador((contador - 1))
  }

  const transformValue = () =>
  `translateX(-${ ( 100 / ( numFotos ) ) * contador }%)` 
  

  return { nextHandler, prevHandler, transformValue }
}
