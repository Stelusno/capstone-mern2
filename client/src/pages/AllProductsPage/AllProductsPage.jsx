import {useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import { Fragment } from 'react';
export default function AllProductsPage() {
    const [products, setProducts] = useState([]);
  
    const URL = 'http://localhost:3001';

    const getProducts = () => {
      axios.get(`${URL}/products`)
      .then((response ) => setProducts(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
    }
  
    useEffect(() => {
        getProducts()
      }, [])

  return (
  <>
    <h1>All Products</h1>
    {products.map((product) => {
      return (
        <Fragment key={product._id}>
          <Product product={product} />
        </Fragment>
      );
    })}
  </>
);
}