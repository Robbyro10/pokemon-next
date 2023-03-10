import { Card, Grid, Row, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={4} lg={2} xl={1} key={pokemon.url}>
      <Card isHoverable isPressable onPress={onClick} variant="bordered">
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={pokemon.img}
            alt={pokemon.name}
            width="100%"
            height={140}
            css={{ pt: 3 }}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
