import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../graphql/generated/index";
import { Layout } from "../components/Layout";
import NextLink from "next/link";
import { Box, Button, Flex, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [variables, setVariables] = useState({limit: 10, cursor: null as null | string});
  const [{ data, fetching }] = usePostsQuery({ variables });

  if (!fetching && !data) {
    return <div>Something went wrong</div>
  }

  return (
    <Layout>
      <Flex align="center">
        <Heading>LiReddit</Heading>
        <NextLink href="/create-post">
          <Link ml="auto">Create Post</Link>
        </NextLink>
      </Flex>

      <br></br>
      {!data ? (
        <div>loading...</div>
      ) : (
        <Stack>
          {data.posts.map((post) => (
            <Box key={post.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.textSnippet}</Text>
            </Box>
            // <div key={post.id}>{post.title}</div>
          ))}
        </Stack>
      )}
      {data ? <Flex>
        <Button isLoading={fetching} m="auto" my={8} onClick={() => {
          setVariables({
            limit: variables.limit,
            cursor: data.posts[data.posts.length - 1].createdAt
          })
        }}>
          load more
        </Button>
      </Flex> : null}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
