import React from "react";
import "./selectedpokemon.css"
import { nanoid } from "nanoid";
import questionMark from "../images/question.png"

export default function SelectedPokemon(props) {

    function makefirstCapital(str) {
        const splitted = str.split(' ')
        const final = [];
        for(let i = 0; i < splitted.length; i++) {
          final.push(splitted[i][0].toUpperCase() + splitted[i].slice(1))
        }
        return final.join('')
      }
      
    if(props.currentPokemon) {

        const pokemonAbilities = props.currentPokemon.abilities.map(abi => {
            return (
                <li key={nanoid()}>
                    <span className="arrow"></span>
                    {makefirstCapital(abi.ability.name)}
                </li>
            )
        })


        return (
            <div className="selected">
                <img src={props.currentPokemon.sprites.front_default || questionMark} className="selected-pokemon"/>
                <h3 className="pokemon-number stat">
                    No. {props.currentPokemon.id <= 9 ? `00${props.currentPokemon.id}` : props.currentPokemon.id}
                </h3>
                <h3 className="pokemon-title stat">{makefirstCapital(props.currentPokemon.name)}</h3>
                <div className="pokemon-abilities">
                    <h3>Abilities</h3>
                    <ul>
                        {pokemonAbilities}
                    </ul>
                </div>
            </div>
        )
    }

    else {
        return (
            <div className="selected"></div>
        )
    }

}