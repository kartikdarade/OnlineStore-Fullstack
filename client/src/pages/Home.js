import react, { useContext } from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {toast} from 'react-toastify';

const dummyProducts = [
    { id: 1, name: 'Smartphone', price: 19999, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Headphones', price: 2999, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Laptop', price: 54999, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Smartwatch', price: 4999, image: 'https://via.placeholder.com/150' },
]

function Home() {
    const {addToCart} = useContext(CartContext);
    const handleAddToCart = product => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    }
    return (
        <div className="home-container">
            <h1>Welcome to Darade Store  🛍️</h1>
            <div className="product-grid">
                {dummyProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <Link to = {`/product/${product.id}`}>
                          <button>View Details</button>
                        </Link>
                        <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;