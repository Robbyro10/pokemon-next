import { Button, Navbar, useTheme } from "@nextui-org/react";
import { Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Link href="/" passHref>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="app icon"
            width={70}
            height={70}
          />
        </Link>
        <Link href="/" passHref legacyBehavior>
          <a style={{ display: "flex" }}>
            <Text h2>P</Text>
            <Text h3>ókeHedd</Text>
          </a>
        </Link>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Link href="/favorites">Favorites</Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};
