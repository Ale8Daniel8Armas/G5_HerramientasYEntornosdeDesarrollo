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
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-500">{product.description}</p>
        <Button variant="contained" color="primary" onClick={handleAddToCart} disabled={isAdded}>
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;