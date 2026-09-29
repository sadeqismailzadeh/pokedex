import { Pokemon } from '@/utils/types';
import { json } from 'node:stream/consumers';

async function getData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('unknown error');
    }

    return [];
  }
}

export default async function HomePage() {
  const pokemonDate = await getData();
  console.log({ pokemonDate });

  return (
    <>
      <h1>hello world</h1>
      <input type="text" placeholder="search for pokemon" />

      {pokemonDate.results.map((pokemon: Pokemon, idx) => {
        return <div key={`${idx}-${pokemon.name}`}>{pokemon.name}</div>;
      })}
      <div>card component</div>
    </>
  );
}
