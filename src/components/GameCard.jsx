//This component is used for making cards for each game
import React from "react";
import '../styles/gameCard.css';
import PropTypes from 'prop-types';

function GameCard({imageUrl, name, price}){
/* Create a display with image, game name, release date*/
    return(
        <>
        <div className="gameCards">
            <img src={imageUrl} alt= {name} className="gameImage"/>
             <h2>{name}</h2> 
             <p>{price}</p>
        </div>
        </>
    );
}

GameCard.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
}

export default GameCard;