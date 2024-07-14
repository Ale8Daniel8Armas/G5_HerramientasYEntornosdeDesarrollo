import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

function Product() {
  const { id } = useParams();
  const [imageUrl, setImageUrl] = useState(`https://via.placeholder.com/200?text=Product+${id}`);
  const [addedProduct, setAddedProduct] = useState(null);

  const updateImageUrl = () => {
    const newImageUrl = 'https://web.didiglobal.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fn7hs0hadu6ro%2F7cYJRDYk9p5kcLDzodLAtD%2F99866aedbbfc44cede440507e7d3ee20%2FPizza_de_pepperoni_al_horno.png&w=1920&q=75'; 
    setImageUrl(newImageUrl);
  };

  const addToCart = (product) => {
    console.log('Producto añadido:', product);
    setAddedProduct(product);
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
        addToCart={addToCart}
      />
      {addedProduct && (
        <div className="mt-5 p-4 border rounded-lg bg-gray-100">
          <h3 className="text-lg font-bold">Detalles del producto añadido</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Título
              </label>
              <input
                id="title"
                type="text"
                value={addedProduct.title}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Descripción
              </label>
              <textarea
                id="description"
                value={addedProduct.description}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Imagen
              </label>
              <img src={addedProduct.image} alt={addedProduct.title} className="mt-2 w-full" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Product;
