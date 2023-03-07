import React from 'react';
import { useState } from "react";

const ItemCount = () => {
    
    const initial = 1;
    const stock = 5;
    const [count, setCount] = useState(initial)

    
    const sumar = () => { 
        setCount(count + 1)
    }
    const restar = () => {
        setCount(count - 1)
    }
  
    return (
    <div>
      <button onClick={restar}>-</button>
      <span>{count>stock ? stock : count && count < 0 ? count : count}</span>
      <button onClick={sumar}>+</button>
      <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
