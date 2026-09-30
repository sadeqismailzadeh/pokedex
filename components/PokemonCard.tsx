import React from 'react';
import NextImage from 'next/image';
import { text } from 'node:stream/consumers';
import { Card, CardSection, Text, Badge, Button, Group, Stack } from '@mantine/core';
import { Pokemon } from '@/utils/types';

const typeColors = {
  normal: 'gray.6',
  fire: 'red.6',
  water: 'blue.6',
  electric: 'yellow.5',
  grass: 'green.6',
  ice: 'cyan.3',
  fighting: 'red.8',
  poison: 'violet.6',
  ground: 'yellow.8',
  flying: 'indigo.4',
  psychic: 'pink.5',
  bug: 'lime.6',
  rock: 'yellow.9',
  ghost: 'violet.9',
  dragon: 'indigo.8',
  dark: 'dark.8',
  steel: 'gray.5',
  fairy: 'pink.3',
};

export default function PokemonCard({ id, imageUrl, name, types }: Pokemon) {
  return (
    <>
      {/* <div>
        <Image src={imageUrl} alt={name} width={250} height={250} />
        <h2>{name}</h2>
        <p>{id}</p>
        <p>{types.join(', ')}</p>
      </div> */}

      <Card shadow="sm" padding="lg" withBorder>
        <Stack align="center" gap={7}>
          <CardSection>
            <NextImage src={imageUrl} alt={name} width={150} height={150} />
          </CardSection>
          <Text c="gray.6" size="sm">
            #{String(id).padStart(3, '0')}
          </Text>
          <Text fw={500} size="xl">
            {name}
          </Text>
          <Group gap={4}>
            {types.map((type, idx) => {
              return (
                <Badge
                  key={`${type}-${idx}`}
                  color={typeColors[type as keyof typeof typeColors]}
                  variant="filled"
                  radius="xl"
                  size="sm"
                >
                  {type}
                </Badge>
              );
            })}
          </Group>
        </Stack>
      </Card>
    </>
  );
}
