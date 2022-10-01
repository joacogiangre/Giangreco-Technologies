import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom"

const Cart=() => {
    const ctx = useContext(CartContext);
    return(
        <>
            <div className="row">
                <h1 className="col-10">Your cart</h1>
                <button onClick={ctx.clear} type="button" className="btn btn-primary mx-4 col-2">Delete all</button>
                <Link to="/"><button type="button" className="btn btn-primary mx-3 my-2 col-2">Continue shopping </button></Link>
            </div>
            {ctx.cartList.length === 0 ? <div>
                <h2>There is no products in the cart</h2>
            </div> : <div className="container-xxl d-flex flex-column align-items-center">
                {ctx.cartList.map(item => <div className="shadow p-3 mb-5 bg-body rounded d-flex flex-column w-20" key={item.id}> <img className="col-12 col-md-12 " src={item.pictureUrl} alt={item.title}></img> <div className="col-12 col-md-12 text-center fw-bold">{item.title}</div> <div className="col-12 col-md-12 text-center fw-bold">${new Intl.NumberFormat('es-MX').format(ctx.itemsPrice(item.id))} each<p className="col-12 col-md-12 text-center">{"You have "+item.qty +" products of this kind"}</p></div> <button type="button" className="btn btn-primary justify-content-center" onClick={()=>{ctx.removeItem(item.id)}}>Delete this product</button></div>)}
                <p className="fw-bold shadow bg-body rounded">Total: ${new Intl.NumberFormat('es-MX').format(ctx.finalPrice())}</p>
                <button type="button" className="mb-2 btn btn-danger border border-dark">
                    Checkout now
                </button>
            </div>
        }
       </>
    )   
}



export default Cart;