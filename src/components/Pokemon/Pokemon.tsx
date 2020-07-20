import "./Pokemon.scss";
import React from "react";
import { usePokemon } from "./hooks";
import { createObservable } from "./observable";

const { subject, obervable } = createObservable();

export default function Pokemon() {
  const [q, setQuery] = React.useState("");
  const { results } = usePokemon(obervable);

  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    subject.next(value);
  }

  return (
    <div className="pokemon">
      <input
        type="text"
        value={q}
        className="search-input"
        onChange={onSearchHandler}
        placeholder="Enter pokemon name"
      />
      <ul className="list">
        {results.map((pokemon) => (
          <li key={pokemon.name}>
            <a rel="noopener noreferrer" target="_blank" href={pokemon.url}>
              {pokemon.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
