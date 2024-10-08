import React, {useState, useEffect} from "react";
import axios from "axios";
import '../styles/cartGames.css';
import GameCard from "./GameCard";

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

//Here I want to display specific games, need to figure out how to use props to select games
    return(
        <>
            <div className="gameCardContainer">
                {games.length > 0 ?(
                <div className="gameCards">
                <GameCard imageUrl = {games[0].background_image} name = {games[0].name} released = {games[0].released}/>
                <GameCard imageUrl = {games[1].background_image} name = {games[1].name} released = {games[1].released}/>
                <GameCard imageUrl = {games[2].background_image} name = {games[2].name} released = {games[2].released}/>
                </div>
                ): (
                    <p>No GameCard Rendered</p>
                )}
            </div>
        </>
    );
}
export default CartGames;