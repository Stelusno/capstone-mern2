import { useState } from 'react';

const Add = ({ handleCreate }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: 0,
    size: '',
    image: ''
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate(product);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="category"
          name="category"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="size"
          name="size"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="image"
          name="image"
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
};

export default Add;
