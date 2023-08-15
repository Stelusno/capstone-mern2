import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import LoginPage from './components/LoginPage/LoginPage';
import Admin from './pages/Admin/Admin';
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
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <footer>Copyright @ 2023 TheSpot.com | All rights reserved</footer>
      </main>
    );
  }
