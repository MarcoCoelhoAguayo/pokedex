import React from "react";
import AllPokemon from "./allpokemon";
import SelectedPokemon from "./selectedpokemon"
import "./pokedex.css"

export default function Pokedex(props) {
    return (
        <div className="container">
            <AllPokemon 
                AllPokemonList = {props.AllPokemonList}
                pokemonImages = {props.pokemonImages}
                currentPokemon = {props.currentPokemon}
                selectIt = {props.selectIt}
            /> 
            <SelectedPokemon 
                currentPokemon = {props.currentPokemon}
            />
        </div>
    )
}