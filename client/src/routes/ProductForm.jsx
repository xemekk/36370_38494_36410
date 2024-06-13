import React, { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [carbs, setCarbs] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://127.0.0.1:8000/products?name=${encodeURIComponent(name)}&calories=${calories}&carbs=${carbs}&protein=${protein}&fat=${fat}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      setMessage(`Product ${data.name} added successfully!`);
      
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product. Please try again.');
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            step="0.1" // Example step for decimal inputs
            required
          />
        </label>
        <br />
        <label>
          Carbs:
          <input
            type="number"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
            step="0.1" // Example step for decimal inputs
            required
          />
        </label>
        <br />
        <label>
          Protein:
          <input
            type="number"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
            step="0.1" // Example step for decimal inputs
            required
          />
        </label>
        <br />
        <label>
          Fat:
          <input
            type="number"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
            step="0.1" // Example step for decimal inputs
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductForm;
