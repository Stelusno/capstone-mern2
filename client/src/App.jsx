import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage.jsx'
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get('').then(
      (response) => setProducts(response.data),
      (err) => console.log(err)
    );
  });

  return (
    <main className="App">
        <NavBar />
      <Routes>
         <Route path="/" element={<AllProductsPage />} />
      </Routes> 
    </main>
  );
}
