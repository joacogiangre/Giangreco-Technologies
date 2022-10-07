import ItemList from "./ItemList";
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./utils/dataBaseConfig";

function ItemListContainer() {
  const [data, setData] = useState([]);
  const {idCategory}=useParams()
  useEffect(() => {
    //Request a product from the dataBase based on his id
    async function fetchData() {
      if (idCategory) {
          const q = query(collection(db, "products"), where('categoryId', '==', parseInt(idCategory)))
          const querySnapshot = await getDocs(q);
          const dataFromFirestore = querySnapshot.docs.map(item => ({
              id: item.id,
              ...item.data()
          }))
          setData(dataFromFirestore)
      } else {
          const querySnapshot = await getDocs(collection(db, "products"));
          const dataFromFirestore = querySnapshot.docs.map(item => ({
              id: item.id,
              ...item.data()
          }))
          setData(dataFromFirestore)
      }
  }
  fetchData()
}, [idCategory])

  return (
    <>
        <div className="container-lg">
            <ItemList data={data}></ItemList>
        </div>
    </>
  );
}
export default ItemListContainer;
