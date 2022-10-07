import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom"

function CartWidget() {
  const ctx = useContext(CartContext);

  return (
    ctx.calcItemsQty()!==0 && 
      <Link to="/cart" className=" text-decoration-none text-dark">
        <Badge badgeContent={ctx.calcItemsQty()} color="secondary">
          <ShoppingCartIcon/>
        </Badge>
      </Link>
  );
}

export default CartWidget;
  