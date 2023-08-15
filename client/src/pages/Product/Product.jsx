import './Product.css';
const Product = (props) => {
  return (
    <>
      <h3>Name: {props.product.name} </h3>
      <p>Category: {props.product.category}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
      <p>Size: {props.product.size}</p>
      <img id="image" src={props.product.image} alt={props.product.name} />
    </>
  );
};

export default Product;
