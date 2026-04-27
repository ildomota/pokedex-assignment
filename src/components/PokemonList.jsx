function PokemonList({ pokemonList, onSelect }) {
  return (
    <ul className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name} onClick={() => onSelect(pokemon)}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;