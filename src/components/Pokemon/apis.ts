import { Pokemon } from './types'

export function fetchPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then((res) =>
        res.json()
    ) as Promise<{ results: Pokemon[] }>;
}