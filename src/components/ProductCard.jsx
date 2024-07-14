import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function ProductCard({ product, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);

    // Mostrar alerta con detalles del producto añadido
    alert(`Producto añadido:\n\nTítulo: ${product.title}\nDescripción: ${product.description}`);

    // Reset isAdded after a certain timeout (example: 2 seconds)
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <Card className="MuiCard-root">
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        className="MuiCardMedia-root"
      />
      <CardContent className="MuiCardContent-root">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-500">{product.description}</p>
        <Button
          variant="contained"
          color="warning"
          onClick={handleAddToCart}
          disabled={isAdded}
          className="MuiButton-root MuiButton-containedPrimary"
        >
          {isAdded ? 'Agregado con éxito' : 'Agregar al carrito'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
