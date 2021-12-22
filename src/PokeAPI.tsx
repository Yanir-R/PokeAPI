import React, { useEffect, useState } from "react";
import { api } from "./api";
import { PokeList } from "./components/PokeList";

export const PokeAPI: React.FC = () => {
    let [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        fetchPokemonData()
    }, [])

    const fetchPokemonData = async () => {

        const pokemonResponse: any = await api.getAllPokemon()
        setPokemonData(pokemonResponse)
    }
    return (
        <div>

            <h2>pokeAPI Page</h2>
            <PokeList pokemonData={pokemonData} />
        </div>
    )
}