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

    const calcItemsQty=()=>{
        let qtys = cartList.map(item=>item.qty);
        return qtys.reduce(((previousValue, currentValue)=> previousValue + currentValue), 0);
    }

    const itemsPrice = (id) => {
        let priceQty = cartList.find((item) => item.id === id);
        return (priceQty.qty * priceQty.price)
    }
    const finalPrice = () => {
        let priceQty = cartList.map(item => (item.price * item.qty));
        return priceQty.reduce((acumulador, precioXProd) => acumulador += precioXProd, 0);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, removeItem,clear, calcItemsQty, itemsPrice, finalPrice}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;