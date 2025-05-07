import { createContext, useState } from "react";

export const CartContext =  createContext();

export function CartProvider({ children}) {
    const [cart, setCart] = useState([]);
    const addToCart = product => {
        setCart(prevCart => {
            const existing = prevCart.find(p => p.id === product.id);
            if(existing)
            {
                return prevCart.map(p => p.id === product.id ? {...p, quantity: p.quantity +1 } : p);
            }
            return[...prevCart, {...product, quantity:1}];
        });
    };

    const removeFromCart = productId => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
      };

    return(
        <CartContext.Provider value={{cart, addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
}