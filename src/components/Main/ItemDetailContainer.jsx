import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import dataBase from '../utils/dataBase'
import fetchData from '../utils/fetchData'
import { useParams } from "react-router-dom";

function ItemDetailContainer() {

  const [data, setData] = useState([]);
  const {id}=useParams()
  useEffect(() => {
      fetchData(2000, dataBase.find(item=>item.id===parseInt(id)))
          .then(result => setData(result))
          .catch(err => console.log(err))
  }, [id])

  return (
    <div>
        <ItemDetail product={data} />
    </div>
)
}
export default ItemDetailContainer;
