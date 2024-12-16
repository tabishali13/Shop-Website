import styles from './About.module.css';

function About(){
   
    return(
        <>
        <div className = {styles['About-page']}>

        <h1>About Us</h1>
        <div className={styles.mission}>
           <h3>Our Mission is to give you the gaming experience you want.<br /> Everything from your favourite
                video games and gaming consoles. Build the gaming setup you always wanted 
                by shopping on this site. By choosing us you will never have to deal with low stock or faulty
                <br /> devices.
             </h3>
             <img src='/images/gaming setup.webp' alt='image of gaming setup'/>
        </div>

        <hr/>

        <div className = {styles.valuesTitle}>
            <h1>Our Values</h1>
        </div>

        <div className = {styles.values}>
            <h3>At PixelRealm our goal is to provide our customers with an exceptional experience for 
                every type of gamer. Our priority is customer satisfaction by offering the highest quality 
                products and staying up to date with latest in gaming technology.
            </h3>
            <img src= '/images/values.jpeg' alt='customer-values'/>
        </div>

        </div>

        </>
    );

}
export default About;