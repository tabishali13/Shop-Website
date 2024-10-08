
import CartItem from "./CartItem";
import CartGames from "./CartGames";
import '../styles/shop.css';
function Shop(){
    return(
        <>
        <div className="shopContainer">
        <CartItem/>
        <CartGames/>
        </div>
        </>
    );

}
export default Shop;