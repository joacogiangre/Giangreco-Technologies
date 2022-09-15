import Item from './Item';

function ItemList({ data }) {
  return (
    <>
      {data.map(item => (
        <Item 
          key={item.id}
          id={item.id}
          title={item.title}
          pictureUrl={item.pictureUrl}
          price={item.price}
          description={item.description}
        />
      ))}
    </>
  )
}

export default ItemList;