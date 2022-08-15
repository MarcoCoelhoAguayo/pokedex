import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const [currentPokemon, setCurrentPokemon] = useState(null)

  const [formData, setFormData] = useState({
    choosePokemon: ""
  })

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(res => res.json())
      .then(data => setAllPokemon(data.results))

    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(res => res.json())
      .then(data => setCurrentPokemon(data))
  }, [])

   useEffect(() => {
     if(formData.choosePokemon === "") {
       console.log("Not yet")
     }else (
     fetch(`https://pokeapi.co/api/v2/pokemon/${formData.choosePokemon}`)
       .then(res => res.json())
       .then(data => setCurrentPokemon(data))
     )
   }, [formData])

  function makefirstCapital(str) {
    const splitted = str.split(' ')
    const final = [];
    for(let i = 0; i < splitted.length; i++) {
      final.push(splitted[i][0].toUpperCase() + splitted[i].slice(1))
    }
    return final.join('')
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }
  console.log(formData, currentPokemon)
  
  const allPokemonOptions = allPokemon.map((poke, index) => {
    return (
      <option 
        key={nanoid()} 
        value={index + 1}
      >
        {makefirstCapital(poke.name)}
      </option>
    )
  })

  //console.log(currentPokemon)

  if(currentPokemon) {
    return (
      <div className="App">
        <div className='cotainer'>
          <select
            name='choosePokemon'
            value={formData.choosePokemon}
            onChange={handleChange}
          >
            {allPokemonOptions}
          </select>
          <div className='pokemon-info'>
            <img src={currentPokemon.sprites.front_default}/>
            <h2>{currentPokemon.name}</h2>
            <p>Description</p>
          </div>
        </div>
        
      </div>
    );
  }else {
    return null
  }
  
}

export default App;
