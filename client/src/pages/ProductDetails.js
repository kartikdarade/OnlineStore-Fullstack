import react from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const dummyProducts = [
    { id: 1, name: 'Smartphone', price: 19999, image: 'https://via.placeholder.com/300', description: 'A powerful smartphone with long battery life.' },
    { id: 2, name: 'Headphones', price: 2999, image: 'https://via.placeholder.com/300', description: 'Crystal clear sound and deep bass.' },
    { id: 3, name: 'Laptop', price: 54999, image: 'https://via.placeholder.com/300', description: 'Lightweight laptop for work and play.' },
    { id: 4, name: 'Smartwatch', price: 4999, image: 'https://via.placeholder.com/300', description: 'Track your health and fitness on the go.' },
];

function ProductDetails() {
    const { id } = useParams();
    const product = dummyProducts.find(p => p.id === parseInt(id));
    if (!product) {
        return <div>Product Not Found </div>
    }
    return (
        <div className="details-container">
            <img src={product.image} alt={product.name} />
            <div className="info">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h3>Price: ₹{product.price}</h3>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductDetails;