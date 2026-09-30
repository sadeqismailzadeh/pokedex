'use client';
import React, { useState } from 'react';
import { Pokemon } from '@/utils/types';
import PokemonList from './PokemonList';
import SearchInput from './SearchInput';

export default function PokemonWrapper({ pokemons: initialPokemons }: { pokemons: Pokemon[] }) {
  const [filteredPokemons, setFilteredPokemons] = useState(initialPokemons);

  const handleSearch = (search: string) => {
    const filtered = initialPokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(search.toLocaleLowerCase());
    });

    setFilteredPokemons(filtered);
    return;
  };

  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </>
  );
}
