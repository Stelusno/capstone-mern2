import React, { useState } from 'react';

const Add = ({ handleCreate }) => {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    description: '',
    price: 0,
    size: '',
    image: '',
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate(product);
  };

  return (
    <div className="mb-8 text-center">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Category"
          name="category"
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Size"
          name="size"
          onChange={handleChange}
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          type="text"
          placeholder="Image"
          name="image"
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
