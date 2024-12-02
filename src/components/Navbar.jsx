import { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import Cart from './Cart';

function Navbar() {
  const { myCart } = useContext(CartContext); //context variable to hold contents of cart
  const [totalItems, setTotalItems] = useState(0);
  const [select, setSelect] = useState(()=>{
    //either return the page in local storage or 'Home' (on first render)
    return localStorage.getItem("selectedPage") || "Home";
  });

  useEffect(()=>{
    const total = myCart.reduce((itemTotal, item) => itemTotal + item.qty, 0); // includes 0 as an argument as it represents the initial value 
    setTotalItems(total);
  }, [myCart]); //compute total items in myCart whenever myCart changes

  const handleMenuChange = (page) => {
    setSelect(page);
    //saved the selected page into local storage
    localStorage.setItem("selectedPage", page);
  }
  //used for loading the selected page on component mount
  useEffect(()=>
  {
   const savedPage = localStorage.getItem("selectedPage");

   if(savedPage){
    setSelect(savedPage);
   }
  }, []);

  return (
    <>
      <div className= {styles.navContainer}>
        {/*Make this Clickable so that when clicked brings you back to home page */}
        <div>PixelRealm</div>
        
        <div className= {styles['nav-sections']}>
          
          <li to = "/" onClick={() => handleMenuChange("Home")}> 
             <Link to="/">Home</Link>{select === "Home" ? <hr /> : <> </>}  
          </li>

          <li onClick = {()=> handleMenuChange("Shop")}>
            <Link to="/shop">Shop</Link> {select === "Shop" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("About")}>
            <Link to='/About'> About </Link> 
            {select === "About" ? <hr/> : <></>} </li>

        </div>

        <div className= {styles.navButtons}>
        
        <Link to= '/Cart'>
        <button className = {styles['signIn-btn']}> Cart({totalItems}) </button>
        </Link>

        </div>

      </div>
    </>
  );
}
export default Navbar;
