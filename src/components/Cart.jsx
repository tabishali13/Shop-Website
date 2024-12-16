import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contex/CartContext";
import styles from '../styles/cart.module.css';

const Cart =()=> {
    const { removeFromCart, clearMyCart, myCart, setMyCart} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=> {
        const savedItems = localStorage.getItem("savedCart");
        if(savedItems && myCart.length === 0){
            setMyCart(JSON.parse(savedItems));
        }
    }, []); 

    useEffect(()=> {
        if(myCart.length > 0){
        localStorage.setItem("savedCart", JSON.stringify(myCart));
        } 
        const total = myCart.reduce((total, item) => {
            return total + (item.price * item.qty);
        },0);
        setTotalPrice(total.toFixed(2))
    }, [myCart]);

    return(
        <> 
        <div className= {styles.CartPage}>
        {   
            myCart.length === 0 ? (<p>your cart is empty</p>) : (
                
                <div className= {styles.myCart}>
                    {/* Here we will map out all the items inside myCart */}
                    <button className = {styles.clearBtn} onClick={clearMyCart}>Clear My Cart</button>
                    <ul className= {styles.CartContents}>
                    {myCart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt= {item.name} style={{width: "150px"}} />
                            <span> {item.name} </span>
                            <span>$:{item.price}</span>
                            <span> Quantity: {item.qty} </span>
                            <button className = {styles.removeBtn} onClick={()=> removeFromCart(item)}>remove</button>
                        </li>
                    ))}
                    </ul>
                    <h2>Total Price: ${totalPrice}</h2>
                </div>  
            )
        }
        </div>
        </>
    );

}
export default Cart;