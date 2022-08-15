import React from "react";
import "./header.css"
import { useEffect, useState } from "react";
import Pokemon from "../images/pokeball.png"

export default function Header(props) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setTime(`${new Date().getHours()}:${new Date().getMinutes()}`), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);


    return (
        <header>
            <nav>
                <div className="logo">
                    <h1 className="head-title">Pokedex</h1>
                </div>
                <div className="pokemon-count">
                    <img src={Pokemon} className="pokeball-image"></img>
                    <p>Number Registered: {props.pokemonCount}</p>
                </div>
                <div className="time">
                    <p>{time.toLocaleString()}</p>
                </div>
            </nav>
            <div className="filtered">
                <h3>Select the amount of pokemon</h3>
                <button className="count-option" onClick={() => props.selectAmount(151)}>151</button>
                <button className="count-option" onClick={() => props.selectAmount(300)}>300</button>
                <button className="count-option" onClick={() => props.selectAmount(500)}>500</button>
                <button className="count-option" onClick={() => props.selectAmount(1000)}>1000</button>
            </div>
        </header>
    )
}