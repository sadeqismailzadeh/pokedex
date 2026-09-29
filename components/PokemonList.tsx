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

      <SimpleGrid p="xl"
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {pokemons.map((pokemon: Pokemon, idx) => {
        return <PokemonCard key={`${idx}-${pokemon.name}`} {...pokemon} />;
      })}
      </SimpleGrid>
    </>
  );
}