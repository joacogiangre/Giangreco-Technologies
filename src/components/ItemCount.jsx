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
      <hr/>
      <button type="button" className="fw-bold btn btn-success mx-2 border border-dark" onClick={() => minus()}>-</button>
      <span className="fw-bold">{counter}</span>
      <button type="button" className="fw-bold btn btn-success mx-2 border border-dark" onClick={() => plus()}>+</button>
      <hr />
      <button type="button" className="fw-bold btn btn-success mx-2 border border-dark" onClick={() => onAdd(counter)}>Add to the cart</button>
    </>
  );
}

export default ItemCount;
