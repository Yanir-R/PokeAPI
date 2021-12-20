export const pokemonBaseAPI = 'https://pokeapi.co/api/v2/pokemon/'

export const api = {
    getAllPokemon: () => {
        fetch(`${pokemonBaseAPI}`)
            .then((pokemonResponse) => pokemonResponse.json()
                .then((pokemonResponseJson) => {
                    Promise.all(pokemonResponseJson.results.map
                        ((pokemonUrl: any) => fetch(pokemonUrl.url)
                            .then((pokeomonResponse) => pokeomonResponse.json())
                        ))
                }))


        // Promise.all(promises).then((results: any) => {
        //     const pokemon = results.map((result: any) => ({
        //         name: result.name,
        //         image: result.sprites['front_default'],
        //         id: result.id
        //     }))
        //     console.log('list', pokemon)
        // })
    },

}


