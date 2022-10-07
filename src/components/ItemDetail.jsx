import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

function ItemDetail({ item }) {
  const [counter, setCounter] = useState(0);
  const ctx= useContext(CartContext);

  const onAdd = (counter) => {
      setCounter(counter);
      ctx.addItem(item, counter)
  };

  return (
    <div className="container-lg" id={item.id}>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={item.pictureUrl} className="card-img-top" alt={item.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title my-3 fw-bold">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text fw-bold">${new Intl.NumberFormat('es-MX').format(item.price)}</p>
        {counter === 0 ? (
          <ItemCount stock={item.stock} initial={counter} onAdd={onAdd}></ItemCount>
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
