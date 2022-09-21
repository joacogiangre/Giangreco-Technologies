import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";

function ItemDetail({ item }) {
  const [counter, setCounter] = useState(0);
  const stock = 10;
  const onAdd = (counter) => {
    if (counter > 1) {
      alert(`${counter} products has been added to the cart`);
      setCounter(counter);
    } else {
      alert(`${counter} product has been added to the cart`);
      setCounter(counter);
    }
  };

  return (
    <div className="container-lg" id={item.id}>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title my-3 fw-bold">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text fw-bold">{item.price}</p>
        {counter === 0 ? (
          <ItemCount stock={stock} initial={counter} onAdd={onAdd}></ItemCount>
        ) : (
          <Link to="/cart">
            <button type="button" className="btn btn-danger border border-dark">
              Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
