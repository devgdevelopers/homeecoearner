// // pages/products/[id].js

// import React, { Suspense } from 'react'
// import UserProfile from '../../component/UserProfile'

// // Example data fetching function, replace with your actual data source
// const fetchProducts = async () => {
//     // Mock data
//     return [

//     ]
// }

// // Function to generate static parameters
// export async function generateStaticParams() {
//     const products = await fetchProducts()
//     return products.map(product => ({
//         id: product.id
//     }))
// }

// // Your page component
// const ProductPage = ({ params }) => {
    
//     const { id } = params
//     return (
//         <div>
//                     <Suspense fallback={<div>Loading...</div>}>
//             <UserProfile  />
//             </Suspense>
//         </div>
//     )
// }

// export default ProductPage


import React , { Suspense } from 'react'
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
            <Suspense fallback={<div>Loading...</div>}>
            <UserProfile productId={id} /></Suspense>
        </div>
    )
}

export default ProductPage