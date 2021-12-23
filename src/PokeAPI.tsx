import React, { useEffect, useState } from "react";
import { api } from "./api";
import Pagination from "./components/Pagination";
import { PokeList } from "./components/PokeList";

export const PokeAPI: React.FC = () => {
    let [pokemonData, setPokemonData] = useState([])
    let [displayedData, setDisplayedData] = useState([])
    const [offset, setOffset] = useState(0);
    let pokemonPerPage = 10;
    const allPages = Math.ceil(pokemonData.length / pokemonPerPage)

    const onPageChange = (page: number = 1) => {
        let startItem = (page - 1) * pokemonPerPage;
        let endItem = page * pokemonPerPage;
        setDisplayedData(pokemonData.slice(startItem, endItem))
    }


    useEffect(() => {
        fetchPokemonData()
        onPageChange()
    }, [pokemonData.length])

    const fetchPokemonData = async (pageNumber: number) => {

        const pokemonResponse: any = await api.getAllPokemon(pokemonPerPage, (pageNumber - 1) * pokemonPerPage)
        setPokemonData(pokemonResponse)
    }
    return (
        <div>

            <h2>pokeAPI Page</h2>
            <PokeList displayedData={displayedData} pokemonData={pokemonData} />
            <Pagination allPagesNumber={allPages} itemsPerPage={10} itemsNumber={pokemonData.length} pageChange={onPageChange} />

        </div>
    )
}