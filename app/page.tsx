import Image from 'next/image';
import { json } from 'node:stream/consumers';
import { types } from 'node:util';
import { Pokemon } from '@/utils/types';

async function getData() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon: { url: string }) => {
        const res: any = await fetch(pokemon.url);
        const details: any = await res.json();
        return {
          id: details.id,
          name: details.name,
          imageUrl: details.sprites.other['official-artwork'].front_default,
          types: details.types.map((item: { type: { name: string } }) => {
            return item.type.name;
          }),
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('unknown error');
    }
  }
  return [];
}

export default async function HomePage() {
  const pokemonData = await getData();
  console.log({ pokemonData });

  return (
    <>
      <h1>hello world</h1>
      <input type="text" placeholder="search for pokemon" />

      {pokemonData.map((pokemon: Pokemon, idx) => {
        return (
          <div key={`${idx}-${pokemon.name}`}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
            <p>{pokemon.types.join(', ')}</p>
          </div>
        );
      })}
      <div>card component</div>
    </>
  );
}
