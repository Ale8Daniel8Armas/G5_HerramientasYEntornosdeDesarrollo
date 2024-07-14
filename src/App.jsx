import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header />
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
