import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataBase from '../utils/dataBase'
import fetchData from '../utils/fetchData'

function ItemListContainer({ title }) {

  const onAdd = (counter) => {
    if (counter > 1) {
      alert(`${counter} products has been added to the cart`);
    } else {
      alert(`${counter} product has been added to the cart`);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
      fetchData(2000, dataBase)
          .then(result => setData(result))
          .catch(err => console.log(err))
  }, [])

  return (
    <>
      <h1 className="text-center text-decoration-underline my-5 fw-bold">{title}</h1>
        <div className="container-lg">
            <ItemList data={data}></ItemList>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    </>
  );
}
export default ItemListContainer;
