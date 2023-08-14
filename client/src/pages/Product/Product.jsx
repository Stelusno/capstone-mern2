const Product = (props) => {
    return (
        <>
        <h3>Name: {props.product.name} </h3>
        <p>Category: {props.product.category}</p>
        <p>Description: {props.product.description}</p>
        <p>Price: {props.product.price}</p>
        <p>Size: {props.product.size}</p>
        {/* <p>{props.product.image}</p> */}
        </>
    )
}

export default Product