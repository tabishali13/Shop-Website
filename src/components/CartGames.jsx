import React, {useState, useEffect} from "react";
import axios from "axios";
import '../styles/cartGames.css';

function CartGames(){
const apiKey = '4048465119f74783a7534a2370685f35';
const uRL = `https://api.rawg.io/api/games?key=${apiKey}`;

useEffect(()=> {
    async function getData(){
    try{
        const response = await axios.get(uRL); 
        console.log(response.data)
        }catch (error){
            console.error('Error', error);
        }
    }
    getData();
}, []);

    return(
        <>
        </>
    );
}
export default CartGames;