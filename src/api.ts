export const pokemonBaseAPI = 'https://pokeapi.co/api/v2/pokemon/'

export const api = {
    getAllPokemon: async () => {
        let fetchPokemonsResponse = await fetch(`${pokemonBaseAPI}`)
        let pokemonsResponseJson = await fetchPokemonsResponse.json()

        let fetchPokemonResponse = await Promise.all(pokemonsResponseJson.results.map(async (pokemonUrl: any) => {

            let pokemonData = await fetch(pokemonUrl.url)
            let pokemonJsonData = await pokemonData.json()
            return (pokemonJsonData)
        }))

        return fetchPokemonResponse

    },
    getPokemonById: async (id: any) => {
        let fetchPokemonById = await fetch(`${pokemonBaseAPI}${id}`)
        let pokemonResponseJson = await fetchPokemonById.json()

        return pokemonResponseJson
    }
}


