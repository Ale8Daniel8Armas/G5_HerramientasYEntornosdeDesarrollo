import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard 
        product={{ title: 'Pizza', description: 'Mediana a 10$', image: 'https://www.thecountrycook.net/wp-content/uploads/2022/05/thumbnail-Smoked-Pepperoni-Pizza-200x200.jpg' }} 
        addToCart={addToCart} 
      />
      <ProductCard 
        product={{ title: 'Hamburguesa', description: 'Con doble queso y extra carne a 5$', image: 'https://loqueva.com/wp-content/uploads/2019/03/Deltoro-Hamburguesa-marzo-2019-Negrita-cordero-morcilla-1-200x200.jpg' }} 
        addToCart={addToCart} 
      />
      <ProductCard 
        product={{ title: 'Lasagna', description: 'Italiana con oregano y paprica a 12$', image: 'https://kirbiecravings.com/wp-content/uploads/2019/03/keto-lasagna-15-200x200.jpg' }} 
        addToCart={addToCart} 
      />
    </div>
  );
}

export default Home;
