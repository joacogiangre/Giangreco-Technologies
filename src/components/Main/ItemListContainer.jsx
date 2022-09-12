import ItemCount from "./ItemCount";
function ItemListContainer({ greeting }) {
  const onAdd = (counter) => {
    if (counter > 1) {
      alert(`${counter} products has been added to the cart`);
    } else {
      alert(`${counter} product has been added to the cart`);
    }
  };

  return (
    <>
      {greeting}
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}
export default ItemListContainer;
