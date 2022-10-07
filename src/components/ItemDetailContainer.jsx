import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./utils/dataBaseConfig";
function ItemDetailContainer() {

  const [data, setData] = useState([]);
  const {id}=useParams()
  useEffect(() => {
    //Request the detail of the product to the database, based on his id
      async function fetchData(){
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        const dataFromFirestore= {
            id:id,
            ...docSnap.data()
        }
        setData(dataFromFirestore)
      }
      fetchData()
  }, [id])

  return (
    <div>
        <ItemDetail item={data} />
    </div>
)
}
export default ItemDetailContainer;
