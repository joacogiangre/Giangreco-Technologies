import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import dataBase from '../utils/dataBase'
import fetchData from '../utils/fetchData'

function ItemDetailContainer() {

  const [data, setData] = useState([]);
  useEffect(() => {
      fetchData(2000, dataBase[5])
          .then(result => setData(result))
          .catch(err => console.log(err))
  }, [])

  return (
    <div>
        <ItemDetail product={data} />
    </div>
)
}
export default ItemDetailContainer;
