import { useState } from 'react';
import './Navbar.css';
function Navbar() {
  const [select, setSelect] = useState("Home");

  const handleMenuChange = (page) => {
    setSelect(page);
  }

  return (
    <>
      <div className="navContainer">
        <div>NAME OF SHOP</div>
        <div className="nav-sections">
          
          <li onClick = {()=> handleMenuChange("Home")}> Home {select === "Home" ? <hr/> : <> </>}</li>

          <li onClick = {()=> handleMenuChange("Products 1")}> Products 1 {select === "Products 1" ? <hr/> : <></>}  </li>

          <li onClick = {()=> handleMenuChange("Products 2")}> Products 2 {select === "Products 2" ? <hr/> : <></>} </li>

        </div>

        <button className = 'login-btn'> LOGIN </button>
      </div>
    </>
  );
}
export default Navbar;
