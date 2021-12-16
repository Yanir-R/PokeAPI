// https://pokeapi.co/api/v2/pokemon/

export const pokemonBaseAPI = 'https://pokeapi.co/api/v2/pokemon'

export const api = {
    getAllPokemon: async (limit: any) => {
        const response = await fetch(`${pokemonBaseAPI}?limit=${limit}`)
        const data = await response.json()
        console.log(data)
        return data
    },

}