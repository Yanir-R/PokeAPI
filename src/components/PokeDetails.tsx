import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

import '../App.css'
export const PokeDetails: React.FC = () => {

    interface Pokemon {
        name: string
        height: number
    }

    const { id } = useParams()
    let [pokemonData, setPokemonData] = useState<Pokemon>({ name: 'bla', height: 1 })
    // console.log(id)

    let fetchPokemonById = (id: any) => {
        api.getPokemonById(id)
            .then((PokemonResultForId) => {
                console.log('my data results:', PokemonResultForId)
                setPokemonData(PokemonResultForId)

            })
    }

    useEffect(() => {
        fetchPokemonById(id)
    }, [id])

    return (
        <div className="container">
            <div className="card">
                <div className="content">
                    <div className="contentBx">
                        <h3>PokeDetails Page <br /><br />
                            <span>{id}</span> <br />

                            {pokemonData.name} <br />
                            {pokemonData.height}</h3>

                    </div>
                </div>
            </div>
        </div>
    )
}