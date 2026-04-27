function PokemonDetails({ pokemon }) {
  if (!pokemon) return <p className="empty-details">Select a Pokémon</p>;

  const image =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default;

  return (
    <section className="pokemon-showcase" key={pokemon.name}>
      <div className="pokemon-image-side">
        <img src={image} alt={pokemon.name} />
      </div>

      <div className="pokemon-info-side">
        <div className="pokemon-info-content">
          <h2>{pokemon.name}</h2>

          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p><strong>Abilities:</strong>{" "}{pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>

          <h3>Stats</h3>
          <ul>
            {pokemon.stats.map((s) => (
              <li key={s.stat.name}>
                {s.stat.name}: {s.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetails;