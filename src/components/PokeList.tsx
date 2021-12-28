import React, { useEffect, useState } from "react";
import { PokeGif } from "./PokeGif";

export const PokeList: React.FC<any> = ({ pokemonData }) => {
    let [favorites, setFavorite] =
        useState<any>(JSON.parse(localStorage.getItem('favorites') || '{}'))

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])
    return (

        <div>

            {pokemonData.map((pokemon: any, i: any) => (
                <ul key={i}>
                    <>
                        < PokeGif
                            key={i}
                            name={pokemon.name}
                            base_experience={pokemon.base_experience}
                            image={pokemon.sprites.front_default}
                            id={pokemon.id}
                        />
                        <button className="favoriteButton" onClick={() => setFavorite({ ...favorites, [pokemon.id]: !favorites[pokemon.id] })} >
                            {favorites[pokemon.id] ? 'remove from' : 'add to'} favorites
                        </button>
                    </>
                </ul>
            ))}

        </div>
    )
}