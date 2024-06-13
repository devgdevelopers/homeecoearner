"use client"
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userName = searchParams.get('name');

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    fetchProducts();
}, []);

  const fetchProducts = () => {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data)
setLoading(false);
        })
        .catch(error => {
            console.error('Fetch error:', error)
            setLoading(false);
        });
};
  console.log(products);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product._id}>
            <h3>{product.cardHeading}</h3>
            <img src={product.cardImg} alt={product.cardHeading} />
          </div>
        ))
      )}
    </div>
  );
};

export default UserProfile;
