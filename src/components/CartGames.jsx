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
const game3 = {description: "The sequel to the original Red Dead Redemption, taking place during the end of the wild west. The gang must steal and rob to survive across America."
                ,quantity: 1};
const game4 = {description: "A hyper action first person shooter taking place on Mars. Take control of the powerful space marine as he takes on the army of hell."
                ,quantity: 1};
const game5 = {description: "A modern retelling of the origin story of Laura Croft. As she goes from a frightened young woman to a hardened survivor."
                ,quantity: 1};
const game6 = {description: "The latest entry in the widely popular fallout series. Take control of your own custom character as they embark in the wasteland in a post apocalyptic Boston." 
                ,quantity: 1};
    return(
        <>
            <div>
                <h1>Available Games</h1>
            <div className="gameCardContainer">
                {games.length > 0 ?(
                <div className="displayCards">
                <Link to={`/game/${games[0].slug}`} state={{imageUrl:games[0].background_image, name: games[0].name, price: "$59.99", description: game1.description, qty: game1.quantity}}>
                    <GameCard imageUrl = {games[0].background_image} name = {games[0].name} price= "$59.99" />
                </Link>
                <Link to={`/game/${games[1].slug}`} state={{imageUrl:games[1].background_image, name:games[1].name, price: "$59.99", description: game2.description, qty: game2.quantity}}>
                <GameCard imageUrl = {games[1].background_image} name = {games[1].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[8].slug}`} state={{imageUrl:games[8].background_image, name:games[8].name, price: "$59.99", description: game3.description, qty: game3.quantity}}>
                <GameCard imageUrl = {games[8].background_image} name = {games[8].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[19].slug}`} state={{imageUrl:games[19].background_image, name: games[19].name, price: "$59.99", description: game4.description, qty: game4.quantity}}>
                <GameCard imageUrl = {games[19].background_image} name = {games[19].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[4].slug}`} state={{imageUrl:games[4].background_image, name: games[4].name, price: "$59.99", description: game5.description, qty: game5.quantity}}>
                <GameCard imageUrl = {games[4].background_image} name = {games[4].name} price= "$59.99" />
                </Link>

                <Link to={`/game/${games[16].slug}`} state={{imageUrl:games[16].background_image, name: games[16].name, price: "$59.99", description: game6.description, qty: game6.quantity}}>
                <GameCard imageUrl = {games[16].background_image} name = {games[16].name} price= "$59.99" />
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