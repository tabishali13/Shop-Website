import { useLocation } from "react-router-dom";
import styles from '../styles/gameDetail.module.css'
import { useState, useMemo, useContext } from "react";
import { CartContext } from "../contex/CartContext";

const GameCardDetails =()=> {
    const { addToCart } = useContext(CartContext);
    const location = useLocation();
    const {imageUrl, name, price, description, qty} = location.state || {};
    const [productQty, setProductQty] = useState(qty || 1);

    const handleIncrease =()=> {
        let newQty = productQty;
        newQty++;
        setProductQty(newQty);
    }

    const handleDecrease =()=> {
       let newQty = productQty;
       if(newQty > 1){
        newQty--;
       }else{
        newQty = 1;
       }
       setProductQty(newQty);
    } 

    const item = useMemo(()=> ({
        image: imageUrl,
        name,
        price,
        qty: productQty
    }), [imageUrl, name, price, productQty]);

    return(
        <>
        <div className= {styles['game-Details']}>
            <img src= {imageUrl} alt= {name}/>
            <div className= {styles['game-Description']}>
                <h2>{name}</h2>
                <br/>
                <p>{description}</p>
                <br/>
                <p>{price}</p>
                <br />
                <div className= {styles.itemQuantity}>
                <button onClick={handleDecrease}> - </button>
                <span>{productQty}</span>
                <button onClick={handleIncrease}> + </button>
                </div>
                <br />
                <div className = {styles.addToCart}>
                <button onClick={()=> addToCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>

        </>
    );
}
export default GameCardDetails;