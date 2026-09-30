import React from 'react';
import Image from 'next/image';
import { Pokemon } from '@/utils/types';
import PokemonCard from './PokemonCard';
import { SimpleGrid } from '@mantine/core';

export default function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <>
      {/* {pokemons.map((pokemon: Pokemon, idx) => {
        return <PokemonCard key={`${idx}-${pokemon.name}`} {...pokemon} />;
      })} */}

      <SimpleGrid py="xl"
        cols={{ base: 1, sm: 2, lg: 4 }}
        spacing={{ base: 'sm', sm: 'md', lg: 'md' }}
        verticalSpacing={{ base: 'md', sm: 'md' }}
      >
        {pokemons.map((pokemon: Pokemon, idx) => {
        return <PokemonCard key={`${idx}-${pokemon.name}`} {...pokemon} />;
      })}
      </SimpleGrid>
    </>
  );
}