import ProductCard from '../components/ProductCard';

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard product={{ title: 'Product 1', description: 'Description 1', image: 'https://via.placeholder.com/200' }} />
      <ProductCard product={{ title: 'Product 2', description: 'Description 2', image: 'https://via.placeholder.com/200' }} />
      <ProductCard product={{ title: 'Product 3', description: 'Description 3', image: 'https://via.placeholder.com/200' }} />
    </div>
  );
}

export default Home;