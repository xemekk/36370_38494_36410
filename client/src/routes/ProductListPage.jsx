import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error fetching data: {error.message}</p>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl my-8">Product List</h1>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <li key={product.id} className="bg-gray-100 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Calories: {product.calories}</p>
            <p>Carbs: {product.carbs}</p>
            <p>Protein: {product.protein}</p>
            <p>Fat: {product.fat}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
