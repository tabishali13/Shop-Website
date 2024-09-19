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

          <li onClick = {()=> handleMenuChange("Products 1")}>
            <Link to="/product1">Products 1</Link> {select === "Products 1" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("Products 2")}>
            <Link to='/About'>About Us</Link> 
            {select === "About" ? <hr/> : <></>} </li>

        </div>
    
        <button className = 'login-btn'> LOGIN </button>
      </div>
    </>
  );
}
export default Navbar;
