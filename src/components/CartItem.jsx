
import data from "../data";
import '../styles/CartItem.css';
import { Link } from "react-router-dom";

function CartItem(){
    return(
    <>
      <div className="console-Selection"> 
            <h1>Available Consoles</h1>
            <ul className="gaming-consoles">
                {data.map((product) => 
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        <img src= {product.image} alt="Image of Product" />
                        <h2>{product.name}</h2>
                        <p>${product.price} CAD</p>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    </>
    );
}

export default CartItem;