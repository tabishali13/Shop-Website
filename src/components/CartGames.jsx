import React, {useState, useEffect} from "react";
import axios from "axios";
import '../styles/cartGames.css';
import GameCard from "./GameCard";
import { Link } from "react-router-dom";

function CartGames(){
const [games, setGames] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(false);
const apiKey = '4048465119f74783a7534a2370685f35';
const uRL = `https://api.rawg.io/api/games?key=${apiKey}`;

useEffect(()=> {
    async function getData(){
    try{
        const response = await axios.get(uRL); 
        console.log(response.data.results); 
        setGames(response.data.results);
        setLoading(false);  
        }
        catch (error){
            setError(error.message);
            setLoading(false);
        }
    }
    getData();
}, []);

const game1 = {description: "The latest entry in the gta series, play as three different characters as they undergo the criminal underworld in the city of Los Santos."
                , quantity: 1}; // gta-v
const game2 = {description: "A next generation open world game taking place in a fantasy universe apart of the widely popular Witcher series."
                ,quantity: 1}; // witcher 3
const game3 = {description: ""};
const game4 = {description: ""};
const game5 = {description: ""};
const game6 = {description: ""};
    return(
        <>
            <div>
                <h1>Available Games</h1>
            <div className="gameCardContainer">
                {games.length > 0 ?(
                <div className="displayCards">
                <Link to={`/game/${games[0].slug}`} state={{imageUrl:games[0].background_image, name: games[0].name, price: "$59.99", description: game1.description}}>
                    <GameCard imageUrl = {games[0].background_image} name = {games[0].name} price= "$59.99" />
                </Link>
                <Link to={`/game/${games[1].slug}`} state={{imageUrl:games[1].background_image, name:games[1].name, price: "$59.99"}}>
                <GameCard imageUrl = {games[1].background_image} name = {games[1].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[2].slug}`} state={{imageUrl:games[2].background_image, name:games[2].name, price: "$59.99"}}>
                <GameCard imageUrl = {games[2].background_image} name = {games[2].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[3].slug}`} state={{imageUrl:games[3].background_image, name: games[3].name, price: "$59.99"}}>
                <GameCard imageUrl = {games[3].background_image} name = {games[3].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[4].slug}`} state={{imageUrl:games[4].background_image, name: games[4].name, price: "$59.99"}}>
                <GameCard imageUrl = {games[4].background_image} name = {games[4].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[5].slug}`} state={{imageUrl:games[5].background_image, name: games[5].name, price: "$59.99"}}>
                <GameCard imageUrl = {games[5].background_image} name = {games[5].name} price= "$59.99" />
                </Link>
                
                </div>
                ): (
                    <p>No GameCard Rendered</p>
                )}
            </div>
            </div>
        </>
    );
}
export default CartGames;