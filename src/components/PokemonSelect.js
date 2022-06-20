import React from "react";


const PokemonSelect = ({allPokemon, onPokemonSelect})=> {
  const pokeOptions = allPokemon.map((pokemon, index) => {
    return <option key={index} value={index}>{pokemon.name}</option>
  })

  const handleChange = (event) => {
    const chosenPokemon = allPokemon[event.target.value]
    onPokemonSelect(chosenPokemon.url);
  }

  return(
    <select onChange={handleChange}>
      <option disabled value="">choose them wisely!</option>
    {pokeOptions}
    </select>
  )


}



export default PokemonSelect;