const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonPage(limit, offset) {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  return response.json();
}

export async function getPokemonDetails(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon details");
  }

  return response.json();
}