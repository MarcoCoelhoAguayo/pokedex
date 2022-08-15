import React from "react";
import { nanoid } from "nanoid";
import "./allpokemon.css"
import questionMark from "../images/question.png"

export default function AllPokemon(props) {


    const allPokemon = props.pokemonImages.length > 0 ? props.pokemonImages.map((pokemon, index) => {
        return (
            <img 
                src={pokemon.sprites.front_default || questionMark} 
                key={nanoid()} 
                className={pokemon === props.currentPokemon ? "pokemon-pic the-chose-one" : "pokemon-pic"}
                onClick={() => props.selectIt(index)}
             />
            )
    }) : [];

    return (
        <div className="viewer">
            {allPokemon}
        </div>
    )

}
