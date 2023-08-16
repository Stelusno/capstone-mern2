import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import { Fragment } from 'react';

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const URL = 'http://localhost:3001';
  // const URL = ;
  const getProducts = () => {
    axios.get(`${URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-montserrat">
        All Products
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <Fragment key={product._id}>
              <div className="flex flex-col justify-between bg-white p-4 shadow-md">
                <Product product={product} />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
