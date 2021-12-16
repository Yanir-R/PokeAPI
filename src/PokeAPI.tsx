import React, { useEffect, useState } from "react";
import { api } from "./api";
import { PokeList } from "./components/PokeList";

export const PokeAPI: React.FC = ({ }) => {
    let [pokemonData, setPokemonData] = useState([])

    let [limit, setLimit] = useState(5)
    let [tpokemonType, setPokemonType] = useState('')



    useEffect(() => {
        const fetchPokemonData = async () => {
            const res = await fetch
                (`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
            const data = await res.json()

            setPokemonData(data.results)
        }
        fetchPokemonData()
    }, [])


    return (
        <div>
            <h2>pokeAPI Page</h2>
            <PokeList pokemonData={pokemonData} />  
        </div>
    )
}