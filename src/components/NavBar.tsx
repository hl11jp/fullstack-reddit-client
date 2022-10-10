import { Box, Button, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../gql/graphql";

export const NavBar: React.FC<{}> = () => {
  const [{ data, fetching }] = useMeQuery();
  let body;

  //data is loading
  if (fetching) {
    body = null;
  }
  //user not logged in
  else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={2} color="white">
            login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">register</Link>
        </NextLink>
      </>
    );
    //user is logged in
  } else {
    body = <Flex>
      {/*type generation error */}
      <Box mr={2}>{data?.me?.username}</Box>
      <Button variant={'link'}>logout</Button>
      </Flex>;
  }
  return (
    <Flex bg="tomato" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
