import { useLocation } from "react-router-dom";
import '../styles/gameDetail.css'

const GameCardDetails =()=> {
    const location = useLocation();
    const {imageUrl, name, price, description} = location.state || {};

    return(
        <>
        <div className="game-Details">
            <img src= {imageUrl} alt= {name}/>
            <div className="game-Description">
                <h2>{name}</h2>
                <br/>
                <p>{description}</p>
                <br/>
                <p>{price}</p>
            </div>
        </div>

        </>
    );
}
export default GameCardDetails;