import React from "react";
import { PokeGif } from "./PokeGif";

export const PokeList: React.FC<any> = ({ pokemonData }) => {

    return (

        <div>
            <h2 >PokeList Page</h2>
            <ul  >
                {pokemonData.map((pokemon: any) => (
                    < PokeGif
                        name={pokemon.name}
                        base_experience={pokemon.base_experience}
                        image={pokemon.sprites.front_default}
                        id={pokemon.id}
                    />
                ))}
            </ul>
        </div>
    )
}