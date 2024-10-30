import { useLocation } from "react-router-dom";
import '../styles/gameDetail.css'
import { useState } from "react";

const GameCardDetails =()=> {
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

    return(
        <>
        <div className="game-Details">
            <img src= {imageUrl} alt= {name}/>
            <div className="game-Description">
                <h2>{name}</h2>
                <br/>
                <p>{description}</p>
                <br/>
                <p>{price}</p>
                <br />
                <div className="itemQuantity">
                <button onClick={handleDecrease}> - </button>
                <span>{productQty}</span>
                <button onClick={handleIncrease}> + </button>
                </div>
                <br />
                <div className="addToCart">
                <button>Add To Cart</button>
                </div>
            </div>
        </div>

        </>
    );
}
export default GameCardDetails;