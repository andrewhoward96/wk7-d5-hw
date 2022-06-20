import React, { useEffect, useState } from "react";

const PokemonDetail = ({ pokemon }) => {

    
    const [currentImage, setCurrentImage] = useState(pokemon.sprites.front_default);

    const front_image = pokemon.sprites.front_default;
    const back_image = pokemon.sprites.back_default;

    return (
        <div>
            <h2>{pokemon.name}</h2>
            <img
                className="pokemon-image-front"
                onMouseEnter={() => setCurrentImage(back_image)}
                onMouseLeave={() => setCurrentImage(front_image)}
                src={currentImage}
                alt={pokemon.name}
            />
            <p>base exp: {pokemon.base_experience}</p>
            <p>weight: {pokemon.weight}</p>
            <p>height: {pokemon.height}</p>
        </div>
    )

}

export default PokemonDetail;