/*import ItemCount from "./ItemCount";
<ItemCount initial={1} stock={10} onAdd={onAdd} />*/
import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import dataBase from '../utils/dataBase'
import fetchData from '../utils/fetchData'
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const {id}=useParams()
  useEffect(() => {
    if (id) {
      fetchData(2000, dataBase.filter(item=>item.categoryId===parseInt(id)))
          .then(result => setData(result))
          .catch(err => console.log(err))
    } else {
      fetchData(2000, dataBase)
          .then(result => setData(result))
          .catch(err => console.log(err))
    }
  }, [id])

  return (
    <>
        <div className="container-lg">
            <ItemList data={data}></ItemList>
        </div>
    </>
  );
}
export default ItemListContainer;
