import React, { useEffect, useState } from "react";
import { api } from "./api";
import Pagination from "./components/Pagination";
import { PokeList } from "./components/PokeList";
import './App.css'

export const PokeAPI: React.FC = () => {
    let [pokemonData, setPokemonData] = useState([])
    let [pageNumber, setPageNumber] = useState<number>(1)
    let pokemonPerPage = 10;

    useEffect(() => {
        fetchPokemonData(pageNumber)
    }, [pageNumber])


    const fetchPokemonData = async (pageNumber: number) => {

        const pokemonResponse: any = await api.getAllPokemon(pokemonPerPage, (pageNumber - 1) * pokemonPerPage)
        setPokemonData(pokemonResponse)
    }

    return (
        <div>
            <div className="one">
                <h1 >Pokemon App</h1> <br />
            </div>
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} />
            <PokeList pokemonData={pokemonData} />

        </div>
    )
}