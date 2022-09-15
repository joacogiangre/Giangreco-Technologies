import ItemCount from './ItemCount'

function ItemDetail({ product }) {

    const onAdd = (counter) => {
        if (counter > 1) {
          alert(`${counter} products has been added to the cart`);
        } else {
          alert(`${counter} product has been added to the cart`);
        }
      };
      
    return (
        <div className="container-lg" id={product.id}>
            <div className="card my-4" style={{ width: '18rem'}}>
                <img src={product.pictureUrl} className="card-img-top" alt={product.title} />
            </div>
            <div className="card-body">
                <h5 className="card-title my-3 fw-bold">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text fw-bold">{product.price}</p>
                <ItemCount stock={10} initial={1} onAdd={onAdd}></ItemCount>
            </div>
        </div>

    )
}

export default ItemDetail