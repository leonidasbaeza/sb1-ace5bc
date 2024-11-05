import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Products = () => {
  const { category } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    // Fetch products based on category
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Add Firebase fetch logic here
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">
        {category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Todos los Productos'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product grid will be populated here */}
      </div>
    </div>
  );
};

export default Products;