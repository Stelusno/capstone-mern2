import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import AuthPage from './AuthPage/AuthPage';
import LoginForm from './components/LoginForm/LoginForm';
import Admin from './pages/Admin/Admin';
import './styles/tailwind.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    axios.get('').then(
      (response) => setProducts(response.data),
      (err) => console.log(err)
    );
  });

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<AllProductsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        &copy; 2023 TheSpot.com | All rights reserved
      </footer>
    </main>
  );
}
