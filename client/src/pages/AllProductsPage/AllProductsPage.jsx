import {useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product'
import AddProduct from '../../components/AddProduct/AddProduct';
import EditProduct from '../../components/EditProduct/EditProduct';
import React from 'react';

export default function AllProductsPage() {
    const [products, setProducts] = useState([]);
  
    const URL = 'http://localhost:3001';

    const getProducts = () => {
      axios.get(`${URL}/products`)
      .then((response ) => setProducts(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
    }
  
    const handleCreate = (createdProduct) => {
      console.log(createdProduct)
      axios.post(`${URL}/products`, createdProduct)
      .then((response) => {
        setProducts([...products, response.data])
      })
    }
  
    const handleEdit = (editedProduct) => {
      axios.put(`${URL}/products/` + editedProduct._id, editedProduct)
      .then((response) => {
        let newProducts = products.map((product) => {
          return product._id !== editedProduct._id ? product: editedProduct
        })
        setProducts(newProducts)
      })
    }
  
    const handleDelete = (deletedProduct) => {
      axios.delete(`${URL}/products/` + deletedProduct._id)
      .then((response) => {
        let newProducts = products.filter((product) => {
          return product._id !== deletedProduct._id
        })
        setProducts(newProducts)
      })
    }
  
    useEffect(() => {
        getProducts()
      }, [])

  return (
  <>
    <h1>All Products</h1>
    <AddProduct handleCreate={handleCreate} />

    {products.map((product) => {
      return (
        <React.Fragment key={product._id}>
          <Product product={product} />
          <EditProduct editedProduct={product} handleEdit={handleEdit} />
          <button onClick={() => { handleDelete(product) }}>Delete</button>
        </React.Fragment>
      );
    })}
  </>
);
}