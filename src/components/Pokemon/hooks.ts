import { Pokemon } from './types'
import { fetchPokemons } from './apis'
import { useState, useEffect } from "react";
import { Observable } from "rxjs";

export function usePokemon(searchObervable: Observable<string>) {
    const [pokemons, setPokemons] = useState([] as Pokemon[]);
    const [results, setResults] = useState([] as Pokemon[]);

    useEffect(() => {
        fetchPokemons().then((json) => {
            setPokemons(json.results);
        });
    }, []);

    useEffect(() => {
        const subscription = searchObervable.subscribe((q) => {
            const value = !q
                ? []
                : pokemons.filter((pokemon) => pokemon.name.includes(q));
            setResults(value);
        });

        return () => subscription.unsubscribe();
    }, [pokemons, setResults, searchObervable]);

    return { pokemons, results };
}