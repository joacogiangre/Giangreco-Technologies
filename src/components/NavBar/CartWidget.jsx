import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function CartWidget() {
  return (
    <Badge badgeContent={4} color="secondary" id="cart">
      <ShoppingCartIcon />
    </Badge>
  )
}

export default CartWidget;
