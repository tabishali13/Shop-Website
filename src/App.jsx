
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import About from './components/About.jsx';
import Consoledetails from './components/Consoledetails.jsx'; 
import GameCardDetails from './components/GameCardDetails.jsx';
import { Routes, Route } from 'react-router-dom';
import { CartContext } from './contex/CartContext.jsx';


function App() {
  
  return (
    <>
    <CartContext.Provider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'element= {<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/product/:productId' element={<Consoledetails/>}></Route>
        <Route path='/game/:slug' element={<GameCardDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    </CartContext.Provider>
    </>
  )
}

export default App;
