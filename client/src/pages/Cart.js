// src/pages/Cart.js
import './Cart.css';

const dummyCart = [
  { id: 1, name: 'Smartphone', price: 19999, quantity: 1, image: 'https://via.placeholder.com/100' },
  { id: 2, name: 'Headphones', price: 2999, quantity: 2, image: 'https://via.placeholder.com/100' },
];

function Cart() {
  const total = dummyCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart 🛒</h1>

      {dummyCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
              </tr>
            </thead>
            <tbody>
              {dummyCart.map(item => (
                <tr key={item.id}>
                  <td className="product-cell">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="total">
            <h3>Total: ₹{total}</h3>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
