import styles from './Home.module.css';
import  { useNavigate } from 'react-router-dom';

function Home(){
const navigate = useNavigate();
     
    const handleOrder =()=> {
        navigate('/shop');
     }

    const handleLearnMore =()=> {
        navigate('/About');
     }

    return(
        <>
        <div className= {styles.content}>

        <div className={styles.homepage}>
        <h1>PixelRealm Your One Stop for your favourite video games</h1>
        <div className= {styles.buttonContainer}>
        <button onClick={handleOrder}>Order Now</button>
        <button onClick={handleLearnMore}>Learn More</button>
        </div>
        </div>

        <div className= {styles.imgContainer}>
            <img src='/images/homepage image.jpeg' alt=''/>
        </div>

        </div>

        </>
    );
}
export default Home;