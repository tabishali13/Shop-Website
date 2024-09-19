import './Home.css';
import  { useNavigate } from 'react-router-dom';

function Home(){
const navigate = useNavigate();
     
    const handleOrder =()=> {
        navigate('/product1');
     }

    const handleLearnMore =()=> {
        navigate('/About');
     }

    return(
        <>
        <div className="content">

        <div className="homepage">
        <h1>PixelRealm Your One Stop for your favourite video games</h1>
        <div className='buttonContainer'>
        <button onClick={handleOrder}>Order Now</button>
        <button onClick={handleLearnMore}>Learn More</button>
        </div>
        </div>

        <div className="imgContainer">
            <img src='/images/homepage image.jpeg' alt=''/>
        </div>

        </div>

        </>
    );
}
export default Home;