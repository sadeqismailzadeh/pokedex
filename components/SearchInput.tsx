'use client';

import { TextInput } from '@mantine/core';
import React from 'react';

export default function SearchInput() {
  return (
      <TextInput
        onChange={(event) => {
          console.log(event.target.value);
        }}
        w="70%"
        type="text"
        placeholder="search for pokemon"
      />
  );
}
