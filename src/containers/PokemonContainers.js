import React, {useState, useEffect} from "react";
import PokemonSelect from "../components/PokemonSelect";
import PokemonDetail from "../components/PokemonDetail";
import './PokemonContainers.css';

const PokemonContainers = () => {
  const [pokemon,setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect (() => {
      fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => setPokemon(data.results))
    },[]);

    const onPokemonSelect = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(data => setSelectedPokemon(data))
    }

    return(
        <div>
        <p>Make sure to select your pokemon!</p>
        <PokemonSelect allPokemon={pokemon} onPokemonSelect={onPokemonSelect}/>
        {selectedPokemon ? <PokemonDetail pokemon={selectedPokemon}/> : null}
        <p>Hover over pokemon to see other profile :)</p>
        </div>
    )

}


export default PokemonContainers;