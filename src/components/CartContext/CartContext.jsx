import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';


export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


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

    const totalPrice = () => {
        return cart.reduce ((prev , act) => prev + act.quantity * act.price, 0); 
    }
    
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCar([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCar(cart.filter(product => product.id !== id));


return (
<CartContext.Provider value={{
clearCart,
isInCart,
addItem,
totalPrice,
totalProducts,
removeProduct,
cart 
}}>
    {children}

    </CartContext.Provider>
)
}