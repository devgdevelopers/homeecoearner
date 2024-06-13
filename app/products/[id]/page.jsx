// pages/products/[id].js

import React from 'react'
import UserProfile from '../../component/UserProfile'

// Example data fetching function, replace with your actual data source
const fetchProducts = async () => {
    // Mock data
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ]
}

// Function to generate static parameters
export async function generateStaticParams() {
    const products = await fetchProducts()
    return products.map(product => ({
        id: product.id
    }))
}

// Your page component
const ProductPage = ({ params }) => {
    const { id } = params
    return (
        <div>
            <UserProfile productId={id} />
        </div>
    )
}

export default ProductPage
