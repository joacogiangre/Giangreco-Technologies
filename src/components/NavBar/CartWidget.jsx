import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../CartContext";

function CartWidget() {
  const ctx = useContext(CartContext);

  return (
    ctx.calcItemsQty()!==0 && 
      <Badge badgeContent={ctx.calcItemsQty()} color="secondary">
        <ShoppingCartIcon />
      </Badge>
  );
}

export default CartWidget;
