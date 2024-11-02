
import data from "../data";
import { Link } from "react-router-dom";
import styles from '../styles/CartItem.module.css';

function CartItem(){
    return(
    <>
      <div className= {styles['console-Selection']}> 
            <h1>Available Consoles</h1>
            <ul className={styles['gaming-consoles']}>
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