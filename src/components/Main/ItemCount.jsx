import { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const plus = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const minus = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <hr />
      <button onClick={() => minus()}>-</button>
      <span>{counter}</span>
      <button onClick={() => plus()}>+</button>
      <hr />
      <button onClick={() => onAdd(counter)}>Add to the cart</button>
    </>
  );
}

export default ItemCount;
