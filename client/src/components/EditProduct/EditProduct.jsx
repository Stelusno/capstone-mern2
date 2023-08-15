import { useState } from 'react';

const Edit = ({handleEdit, editedProduct}) => {
  const [product, setProduct] = useState({ ...editedProduct });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEdit(product);
  };

  return (
    <>
      <details>
        <summary>Edit Product</summary>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="size"
            name="size"
            value={product.size}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </details>
    </>
  );
};

export default Edit;
