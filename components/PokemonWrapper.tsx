'use client';
import React from 'react';
import SearchInput from './SearchInput';
import PokemonList from './PokemonList';
import { Pokemon } from '@/utils/types';

export default function PokemonWrapper({pokemons}: {pokemons: Pokemon[]}) {
  return (
    <>
      <SearchInput />
      <PokemonList pokemons={pokemons} />
    </>
  );
}
