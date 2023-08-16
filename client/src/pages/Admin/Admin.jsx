import { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import AddProduct from '../../components/AddProduct/AddProduct';
import EditProduct from '../../components/EditProduct/EditProduct';
import { Fragment } from 'react';

export default function Admin() {
  const [products, setProducts] = useState([]);

  const URL = 'http://localhost:3001';
  // const URL = ;

  const getProducts = () => {
    axios.get(`${URL}/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }

  const handleCreate = (createdProduct) => {
    axios.post(`${URL}/products`, createdProduct)
      .then((response) => {
        setProducts([...products, response.data]);
      });
  }

  const handleEdit = (editedProduct) => {
    axios.put(`${URL}/products/` + editedProduct._id, editedProduct)
      .then((response) => {
        let newProducts = products.map((product) => (
          product._id !== editedProduct._id ? product : editedProduct
        ));
        setProducts(newProducts);
      });
  }

  const handleDelete = (deletedProduct) => {
    axios.delete(`${URL}/products/` + deletedProduct._id)
      .then((response) => {
        let newProducts = products.filter((product) => (
          product._id !== deletedProduct._id
        ));
        setProducts(newProducts);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Site Products</h1>
      <AddProduct handleCreate={handleCreate} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Fragment key={product._id}>
            <div className="flex flex-col justify-between bg-white p-4 shadow-md">
              <Product product={product} />
              <EditProduct editedProduct={product} handleEdit={handleEdit} />
              <button
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => { handleDelete(product) }}
              >
                Delete
              </button>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
