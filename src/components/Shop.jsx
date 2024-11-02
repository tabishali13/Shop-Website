
import CartItem from "./CartItem";
import CartGames from "./CartGames";
import styles from '../styles/shop.module.css';

function Shop(){
    return(
        <>
        <div className= {styles.shopContainer}>
        <CartItem/>
        <CartGames/>
        </div>
        </>
    );

}
export default Shop;