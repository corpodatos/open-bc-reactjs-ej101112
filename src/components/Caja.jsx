import React, { useState } from "react";

const Caja = () => {
  const colorInicial = "rgb(0,0,0)";

  const [colorCaja, setColorCaja] = useState(colorInicial);
  const [intervalo, setIntervalo] = useState();

  const onMouseOverAction = () => {
    return setIntervalo(
      setInterval(() => {
        const nuevoColor =
          "rgb(" +
          randomColor() +
          "," +
          randomColor() +
          "," +
          randomColor() +
          ")";
        setColorCaja(nuevoColor);
      }, 1000)
    );
  };

  const onMouseOutAction = () => {
    return clearInterval(intervalo);
  }

  const onDoubleClickAction = () => {
    return clearInterval(intervalo);
  }

  const randomColor = () => {
    const min = 0;
    const max = 256;
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: colorCaja,
          width: 300,
          height: 300,
          border: 0,
          fontSize: "2em",
          color: colorCaja === "rgb(0,0,0)" ? "#FFFFFF" : "#000000",
          cursor: 'pointer'
        }}
        onMouseOver={onMouseOverAction}
        onMouseOut={onMouseOutAction}
        onDoubleClick={onDoubleClickAction}
      >{colorCaja}</button>
    </div>
  );
};

export default Caja;
