import React from 'react';
import Image from 'next/image';
import { text } from 'node:stream/consumers';
import { Card, CardSection, Text, Badge, Button, Group } from '@mantine/core';
import { Pokemon } from '@/utils/types';

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
        <CardSection>
          <Image src={imageUrl} alt={name} width={250} height={250} />
          {/* <Image
          src={(game.thumbnail)}
          height={160}
          alt="Norway"
        /> */}
        </CardSection>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
          <Text>{id}</Text>
          <Text>{types.join(', ')}</Text>
        </Group>
      </Card>
    </>
  );
}
