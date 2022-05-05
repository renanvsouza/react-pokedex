const pokemon = []

export default async function fetchPokemonData() {

    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const list = await response.json()

    for (let el of list.results) {
        let response = await fetch(el.url)
        let pokemonData = await response.json()

        let types = []

        pokemonData.types.forEach(element => {
            types.push(element.type.name)
        })

        pokemon.push({
            id: pokemonData.id,
            name: pokemonData.name,
            types,
            imgUrl: pokemonData.sprites.other["official-artwork"].front_default
        })
    }

    return pokemon
}
