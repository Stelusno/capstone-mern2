import React from 'react';

const Product = (props) => {
  return (
    <div className="bg-white p-4 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{props.product.name}</h3>
      <p className="text-gray-600 mb-2">Category: {props.product.category}</p>
      <p className="text-gray-800 mb-4">{props.product.description}</p>
      <p className="text-green-600 font-semibold mb-2">${props.product.price}</p>
      <p className="text-gray-600">Size: {props.product.size}</p>
      <img
        className="mx-auto mt-4 rounded-lg"
        src={props.product.image}
        alt={props.product.name}
      />
    </div>
  );
};

export default Product;
