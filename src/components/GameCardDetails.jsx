import { Link, useParams, useLocation } from "react-router-dom";
import { useState, useEffect,} from "react";
import '../styles/gameDetail.css'

const GameCardDetails =()=> {
    const location = useLocation();
    const {imageUrl, name, released} = location.state || {};

    return(
        <>
        <div className="game-Details">
            <img src= {imageUrl} alt= {name}/>
            <div className="game-Description">
                <h2>{name}</h2>
                <p>{released}</p>
            </div>
        </div>

        </>
    );
}
export default GameCardDetails;