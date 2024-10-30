import { useParams } from "react-router-dom";
import data from "../data";
import { useEffect, useState } from "react";
import '../styles/consoleDetails.css';

function Consoledetails(){
    const {productId} = useParams();
    const [userProduct, setUserProduct] = useState({});
    const [error, setError] = useState(false); //this state is used to track errors

    //The useEffect here will depend on the productId ie product.id from the URL
    useEffect(()=> {
        const product = data.find((item)=>item.id === productId);

        if(!product){
            setError(true);
            return;
        }

        setUserProduct(product);
        setError(false);
    },[productId]);

    //accesses the product object's quantity and increases by 1
    const increaseQty = () =>{
        setUserProduct({...userProduct, qty: userProduct.qty + 1});
    }
    //accesses the product object's quantity and decreases by 1
    const decreaseQty = () =>{
        setUserProduct({...userProduct, qty: userProduct.qty > 1 ? userProduct.qty - 1 : 1});
    }
    
    return(
        <>
        <div className= "item-details">
            <img src = {userProduct.image} alt= {userProduct.name}/>
            <div className= "item-description">
            <h2>{userProduct.name}</h2>
            <br/>
            <p>{userProduct.description}</p>
            <br/>
            <p>${userProduct.price}</p>
            <br/>
            <div class= 'item-quantity'>
                <button onClick={decreaseQty}>-</button>
                <span>{userProduct.qty}</span>
                <button onClick={increaseQty}>+</button>
            </div>
            <br />
            <button> Add to Cart </button>
            </div>
        </div>
        </>
    );
}
export default Consoledetails;