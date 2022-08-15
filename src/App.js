import React, { useState, useEffect} from 'react';
import Header from './components/header';
import Pokedex from './components/pokedex';
import { nanoid } from "nanoid";
import './App.css';


function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const [pokemonCount, setPokemonCount] = useState(151)

  const [pokemonImages, setPokemonImages] = useState([])

  const [currentPokemon, setCurrentPokemon] = useState(null)

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonCount}&offset=0`)
      .then(res => res.json())
      .then(data => setAllPokemon(data.results))    
  }, [pokemonCount])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(res => res.json())
    .then(data => setCurrentPokemon(data))
  }, [])

  useEffect(() => {
    if(allPokemon.length > 0) {
      fetchAllPokemonData()
    }
  }, [allPokemon])


  const fetchAllPokemonData = async () => {
      const promises = await Promise.all(allPokemon.map(poke => fetch(poke.url)))
      const pokemonArray = await Promise.all(promises.map(res => res.json()))
      setPokemonImages(pokemonArray)
  };

  console.log(pokemonImages[899])


  function selectAmount(amount){
    setPokemonCount(amount)
  }

  
  function selectIt(index) {
    setCurrentPokemon(pokemonImages[index])
  }
  
  return (
    <div className='App'>
      <Header 
        pokemonCount = {allPokemon.length}
        selectAmount = {selectAmount}
      />
      <Pokedex 
        allPokemonList = {allPokemon}
        pokemonImages = {pokemonImages}
        currentPokemon = {currentPokemon}
        selectIt = {selectIt}
      />
    </div>
  )
}

export default App;
