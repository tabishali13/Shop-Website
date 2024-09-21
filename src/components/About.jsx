import './About.css';

function About(){
    return(
        <>
        <div className="About-page">
        <h1>About Us</h1>
        <div className='mission'>
           <h3>Our Mission is to give you the gaming experience you want. Everything<br /> from your favourite
                video games and gaming consoles. Build <br /> the gaming setup you always wanted 
                by shopping on this site. <br/> By choosing us you will never have to deal with low stock or faulty
                <br /> devices.
             </h3>
             <img src='/images/gaming setup.webp' alt='image of gaming setup'/>
        </div>
        <hr/>
        <div className='valuesTitle'>
            <h1>Our Values</h1>
        </div>
        <div className='values'>
            <h3>At PixelRealm our goal is to provide our customers with an <br/> exceptional experience for 
                every type of gamer. Our priority is <br/> customer satisfaction by offering the highest quality 
                products <br/> and staying up to date with latest in gaming technology.
            </h3>
            <img src='/images/values.jpeg' alt='customer-values'/>

        </div>


        </div>

        </>
    );

}
export default About;