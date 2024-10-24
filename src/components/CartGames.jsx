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

//Put a Link around each GameCard to link to GameCardDetails.jsx
    return(
        <>
            <div>
                <h1>Available Games</h1>
            <div className="gameCardContainer">
                {games.length > 0 ?(
                <div className="displayCards">
                <Link to={`/game/${games[0].slug}`} state={{imageUrl:games[0].background_image, name: games[0].name, released: games[0].released}}>
                    <GameCard imageUrl = {games[0].background_image} name = {games[0].name} released = {games[0].released}/>
                </Link>
                <GameCard imageUrl = {games[1].background_image} name = {games[1].name} released = {games[1].released}/>
                <GameCard imageUrl = {games[2].background_image} name = {games[2].name} released = {games[2].released}/>
                <GameCard imageUrl = {games[3].background_image} name = {games[3].name} released = {games[3].released}/>
                <GameCard imageUrl = {games[4].background_image} name = {games[4].name} released = {games[4].released}/>
                <GameCard imageUrl = {games[5].background_image} name = {games[5].name} released = {games[5].released}/>
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