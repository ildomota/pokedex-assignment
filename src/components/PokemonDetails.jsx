function PokemonDetails({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="details-card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>

      <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>

      <p>
        Abilities:{" "}
        {pokemon.abilities.map((a) => a.ability.name).join(", ")}
      </p>

      <h4>Stats</h4>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;