import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [select, setSelect] = useState(()=>{
    //either return the page in local storage or 'Home' (on first render)
    return localStorage.getItem("selectedPage") || "Home";
  });

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
        <div>PixelRealm</div>
        
        <div className= {styles['nav-sections']}>
          
          <li to = "/" onClick={() => handleMenuChange("Home")}> 
             <Link to="/">Home</Link>{select === "Home" ? <hr /> : <> </>}  
          </li>

          <li onClick = {()=> handleMenuChange("Shop")}>
            <Link to="/shop">Shop</Link> {select === "Shop" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("About")}>
            <Link to='/About'> About</Link> 
            {select === "About" ? <hr/> : <></>} </li>

        </div>

        <div className= {styles.navButtons}>
        
        <Link to= '/Cart'>
        <button className = {styles['signIn-btn']}> Cart </button>
        </Link>

        <button className= {styles['signup-btn']}>Sign Up</button>
        </div>

      </div>
    </>
  );
}
export default Navbar;
