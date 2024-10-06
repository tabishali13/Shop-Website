//This component is used for making cards for each game
import React from "react";
import '../styles/cartGames.css';
import PropTypes from 'prop-types';

function GameCard({imageUrl, name, released}){
/* Create a display with image, game name, release date*/
    return(
        <>
        <div className="gameCards">
            <img src={imageUrl} alt= {name} className="gameImage"/>
             <p>{name}</p> 
             <p>{released}</p>
        </div>
        </>
    );
}

GameCard.prototype = {
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    released: PropTypes.string,
}

export default GameCard;