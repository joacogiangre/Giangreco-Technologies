function Item({ id, pictureUrl, title, description, price }) {
  return (
    <div id={id}>
      <div className="card my-4" style={{ width: '18rem'}}>
            <img src={pictureUrl} className="card-img-top" alt={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title my-3 fw-bold">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text fw-bold">{price}</p>
        <button type="button" className="btn btn-primary border border-dark">Add product</button>
      </div>
    </div>
  )
}

export default Item;