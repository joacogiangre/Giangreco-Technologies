import { createContext, useState } from "react";

export const CartContext=createContext();

function CartContextProvider({ children }){
    const [cartList, setCartList]=useState([]);
    const isInCart=(id)=>{
        return cartList.find(item=>item.id===id)
    }

    const addItem=(item, qty)=>{
        setCartList([...cartList, item]);
        if(isInCart(item.id)){
            setCartList(cartList.map(products => products.id === item.id ? { ...products, qty: products.qty + qty } : products))
        }else{
            item.qty=qty
            setCartList([...cartList, item]);
        }
    }

    const removeItem=(id)=>{
        setCartList(cartList.filter(item => item.id !== id))
    }

    const clear =()=>{
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem,clear}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;