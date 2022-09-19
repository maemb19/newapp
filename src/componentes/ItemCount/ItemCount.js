import React from "react";
import "./ItemCount.scss"
 

export const ItemCount = ({max, counter, setCounter, handleAgregar}) => {
 

  const handleSumar = () => {
    if (counter < max) {
      setCounter(counter + 1);
    }
  }

  const handleRestar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={handleRestar} className="btn btn-outline-info mb-2">
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button onClick={handleSumar} className="btn btn-outline-info mb-2">
        +
      </button>
      <div>
        <button onClick={handleAgregar} className="agregar btn btn-outline-info">Agregar</button>
      </div>
    </div>
  );
};

export default ItemCount;
