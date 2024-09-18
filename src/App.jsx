
import { BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Product1 from './components/Product 1.jsx';
import About from './components/About.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/'element= {<Home/>}></Route>
        <Route path='/product1' element={<Product1/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
