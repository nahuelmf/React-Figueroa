import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartCotext = () => useContext(CartContext);


export default function CartProvider({ children }) {

    const [cart , setCar] =useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCar(cart.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            setCar ([...cart, {...item, quantity}])
        }
    }

    console.log('Carrito :', cart);

    const clearCart = () => setCar([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCar(cart.filter(product => product.id !== id));


return (
<CartContext.Provider value={{
clearCart,
isInCart,
addItem,
removeProduct
}}>
    {children}

    </CartContext.Provider>
)
}