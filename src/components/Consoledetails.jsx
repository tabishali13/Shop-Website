import { useParams } from "react-router-dom";
import data from "../data";
import { useEffect, useState } from "react";

function Consoledetails(){
    const {productId} = useParams();
    const [userProduct, setUserProduct] = useState({});
    const [error, setError] = useState(false);

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
        setUserProduct({...userProduct, qty: userProduct.qty + 1});
    }
    
    return(
        <>
        </>
    );
}
export default Consoledetails;