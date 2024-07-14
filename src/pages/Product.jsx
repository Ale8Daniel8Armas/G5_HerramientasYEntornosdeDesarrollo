import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Product() {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(`https://via.placeholder.com/200?text=Product+${id}`);

  // Función para actualizar la URL de la imagen
  const updateImageUrl = () => {
    const newImageUrl = 'https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F7cYJRDYk9p5kcLDzodLAtD%2F99866aedbbfc44cede440507e7d3ee20%2FPizza_de_pepperoni_al_horno.png&w=1920&q=75'; 
    setImageUrl(newImageUrl);
  };

  return (
    <div>
      <button onClick={updateImageUrl}>Actualizar Imagen</button>
      <ProductCard
        product={{
          title: `Product ${id}`,
          description: `Description ${id}`,
          image: imageUrl
        }}
      />
    </div>
  );
}

export default Product;
