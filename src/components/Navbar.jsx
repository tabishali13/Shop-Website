import { useState, useEffect } from 'react';
import './Navbar.css';
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
      <div className="navContainer">
        <div>PixelRealm</div>
        <div className="nav-sections">
          
          <li to = "/" onClick={() => handleMenuChange("Home")}> 
             <Link to="/">Home</Link>{select === "Home" ? <hr /> : <> </>}  
          </li>

          <li onClick = {()=> handleMenuChange("Shop")}>
            <Link to="/shop">Shop</Link> {select === "Shop" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("About")}>
            <Link to='/About'>About Us</Link> 
            {select === "About" ? <hr/> : <></>} </li>

        </div>

        <div className='navButtons'>
        <button className = 'signIn-btn'> Sign In </button>
        <button className= 'signup-btn'>Sign Up</button>
        </div>

      </div>
    </>
  );
}
export default Navbar;
