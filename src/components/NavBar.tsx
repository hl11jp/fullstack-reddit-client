import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const NavBar: React.FC<{}> = () => {
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>
        <NextLink href="/login">
          <Link mr={2} color="white">login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">register</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
