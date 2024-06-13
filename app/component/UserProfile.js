"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
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
