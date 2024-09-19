import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  const [select, setSelect] = useState("Home");

  const handleMenuChange = (page) => {
    setSelect(page);
  }

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

          <li onClick = {()=> handleMenuChange("Products 2")}>
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
