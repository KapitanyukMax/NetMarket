import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = Cookies.get('cartItems');
        if (savedCartItems) {
        console.log(cartItems + "Hi");
            setCartItems(prevCartItems => JSON.parse(savedCartItems));
        }
    }, []);

    const addToCart = (item) => {
        
        const newCartItems = [...cartItems, item];
        setCartItems(newCartItems);
        Cookies.set('cartItems', JSON.stringify(newCartItems));
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        Cookies.set('cartItems', JSON.stringify(newCartItems));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const renderCartItems = () => {
        return cartItems.map((item, index) => (
            <div key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
        ));
    };

    console.log(cartItems);
    return (
        <div>
            <h2>Shopping Cart</h2>
            {renderCartItems()}
            <div>Total: ${calculateTotal()}</div>
        </div>
    );
};

export default Cart;
