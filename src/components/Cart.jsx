import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment } from "firebase/firestore";
import { db } from "./utils/dataBaseConfig";
import Swal from 'sweetalert2'

const Cart=() => {
    const ctx = useContext(CartContext);
    async function createOrder(){
        const itemsOrder= ctx.cartList.map(item=>({id:item.id, title:item.title, price:item.price, qty:item.qty}))
        const sendOrder= {buyer:{name:"Ernesto",phone:"1132122321", email:"@gmail.com"}, items:itemsOrder, date:serverTimestamp(),total:ctx.finalPrice()}
        const newOrderRef=doc(collection(db, "orders"))
        await setDoc(newOrderRef, sendOrder)
        ctx.cartList.forEach(async(item) => {
            const itemReference=doc(db, "products", item.id);
            await updateDoc(itemReference, {stock:increment(-item.qty)})
        });

        Swal.fire(
            'Purchase success',
            'Your order is: '+newOrderRef.id,
            'success'
          )

        ctx.clear()
    }
    return(
        <>
            <div className="row">
                <h1 className="col-10">Your cart</h1>
                {ctx.cartList.length !== 0 && <button onClick={ctx.clear} type="button" className="btn btn-primary mx-4 col-2">Delete all</button>}
                <Link to="/"><button type="button" className="btn btn-primary mx-3 my-2 col-2">Continue shopping </button></Link>
            </div>
            {ctx.cartList.length === 0 ? <div>
                <h2>There is no products in the cart</h2>
            </div> : <div className="container-xxl d-flex flex-column align-items-center">
                {ctx.cartList.map(item => <div className="shadow p-3 mb-5 bg-body rounded d-flex flex-column w-20" key={item.id}> <img className="col-12 col-md-12 " src={item.pictureUrl} alt={item.title}></img> <div className="col-12 col-md-12 text-center fw-bold">{item.title}</div> <div className="col-12 col-md-12 text-center fw-bold">${new Intl.NumberFormat('es-MX').format(ctx.itemsPrice(item.id))}<p className="col-12 col-md-12 text-center">{"You have "+item.qty +" products of this kind"}</p></div> <button type="button" className="btn btn-primary justify-content-center" onClick={()=>{ctx.removeItem(item.id)}}>Delete this product</button></div>)}
                <p className="fw-bold shadow bg-body rounded">Total: ${new Intl.NumberFormat('es-MX').format(ctx.finalPrice())}</p>
                <button onClick={()=>{createOrder()}}type="button" className="mb-2 btn btn-danger border border-dark">
                    Checkout now
                </button>
            </div>
        }
       </>
    )   
}



export default Cart;