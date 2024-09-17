
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Product1 from './components/Product 1.jsx';
import Product2 from './components/Product 2.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'element= {<Home/>}></Route>
        <Route path='/product1' element={<Product1/>}></Route>
        <Route path='/product2' element={<Product2/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
