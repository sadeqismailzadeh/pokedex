'use client';

import React, { useEffect, useState } from 'react';
import { TextInput } from '@mantine/core';
import { BsSearch } from 'react-icons/bs';

interface Props {
  onSearch: (eventValue: string) => void;
}
export default function SearchInput({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(search);
      return;
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      return;
    };
  }, [search, onSearch]);

  return (
    <TextInput
      onChange={(event) => {
        setSearch(event.target.value)
        return;
      }}
      w="70%"
      type="text"
      placeholder="search for pokemon"
      leftSection={<BsSearch />}
    />
  );
}
