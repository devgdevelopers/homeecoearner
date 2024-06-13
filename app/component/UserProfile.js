"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const UserProfile = ({id}) => {
    const searchParams = useSearchParams();
    const userName = searchParams.get('name');

    const [product, setProduct] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const id = window.location.pathname.split('/').pop();
                if (id) {
                    const response = await fetch(`/api/products?id=${id}`);
                    const data = await response.json();
                    setProduct(data);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchProduct();
    }, []);
    console.log(product);



    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>

                <div key={product._id}>
                    <h3>{product.cardHeading}</h3>
                    <img src={product.cardImg} alt={product.cardHeading} />
                </div>

        </div>
    );
};

export default UserProfile;