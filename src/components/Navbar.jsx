import { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import { IoClose, IoMenu } from "react-icons/io5";
import Cart from './Cart';

function Navbar() {
  const { myCart } = useContext(CartContext); //context variable to hold contents of cart
  const [totalItems, setTotalItems] = useState(0);
  const [select, setSelect] = useState(()=>{
    //either return the page in local storage or 'Home' (on first render)
    return localStorage.getItem("selectedPage") || "Home";
  });
  const [showMenu, setShowMenu] = useState(false); //for drop down toggle

  const toggleMenu =()=>{
    setShowMenu(!showMenu);
  }

  const closeMenuMobile =()=>{
    if(window.innerWidth <= 1150){
      setShowMenu(false);
    }
  }

  useEffect(()=>{
    const total = myCart.reduce((itemTotal, item) => {return itemTotal + item.qty}, 0); // includes 0 as an argument as it represents the initial value 
    setTotalItems(total);
  }, [myCart]); //compute total items in myCart whenever myCart changes

  const handleMenuChange = (page) => {
    setSelect(page);
    //saved the selected page into local storage
    localStorage.setItem("selectedPage", page);
    closeMenuMobile(); //after selecting a link the dropdown menu will close (mobile only)
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
        <div>
          <Link to="/" className= {styles.homeLink}>PixelRealm</Link>
        </div>
        
        <div className= {`${styles.navSections} ${showMenu ? styles.show : styles.hide}`}>
          
          <li to = "/" onClick={() => handleMenuChange("Home")}> 
             <Link to="/">Home</Link>{select === "Home" ? <hr/> : <> </>}  
          </li>

          <li onClick = {()=> handleMenuChange("Shop")}>
            <Link to="/shop">Shop</Link> {select === "Shop" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("About")}>
            <Link to='/About'> About </Link> 
            {select === "About" ? <hr/> : <></>} </li>

          <li onClick={()=> handleMenuChange('Cart')}>
            <Link to= '/Cart'>
            <button className = {styles['signIn-btn']}> Cart({totalItems}) </button>
            </Link>
          </li>
        </div>

        <div className= {styles.menuIcon} onClick={toggleMenu}>
          {showMenu ? <IoClose/> : <IoMenu/>}
        </div>

      </div>
    </>
  );
}
export default Navbar;
