import React from "react";
import { PokeGif } from "./PokeGif";

export const PokeList: React.FC<any> = ({ pokemonData }) => {
    return (
        <div>
            <h2>PokeList Page</h2>
            {pokemonData.map(({ name, url }: any) => (
                <ul key={name}>

                    <PokeGif name={name} url={url} />

                </ul>
            ))}

        </div>
    )
}