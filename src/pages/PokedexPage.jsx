import { useEffect, useState } from "react";
import {
  getPokemonPage,
  getPokemonDetails,
} from "../services/pokemonApi";

import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState(0);

  const limit = 20;
  const offset = page * limit;

  useEffect(() => {
    getPokemonPage(limit, offset)
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.error(error));
  }, [offset]);

  const handleSelect = (pokemon) => {
    getPokemonDetails(pokemon.url)
      .then((data) => setSelectedPokemon(data))
      .catch((error) => console.error(error));
  };

  return (
  <main className="page">
    <h2>Pokedex Page</h2>

    <div className="pokedex-layout">
      <div>
        <PokemonList pokemonList={pokemonList} onSelect={handleSelect} />

        <div className="pagination">
          <button onClick={() => setPage(page - 1)} disabled={page === 0}>
            Previous
          </button>

          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>

      <PokemonDetails pokemon={selectedPokemon} />
    </div>
  </main>
);
}

export default PokedexPage;