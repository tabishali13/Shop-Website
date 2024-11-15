import React, { createContext, useState } from "react";

 const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [myCart, setMyCart] = useState([]);

    const addToCart = (item) => {
        setMyCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.name == item.name);
            if(existingItem) {
                return prevCart.map(cartItem => cartItem.name === item.name ? {...cartItem, qty: cartItem.qty + item.qty} : cartItem);
            }else{
                return [...prevCart, item]; //appends a new item at the end of the array
            }
        })
    };

    const removeFromCart = (item) => {

    };

    return(<CartContext.Provider>
        { children }
    </CartContext.Provider>);

};

export {CartContext, CartContextProvider};


