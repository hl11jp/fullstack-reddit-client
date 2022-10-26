import { Box, Heading } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { usePostQuery } from "../../graphql/generated";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Post = () => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const [{ data, fetching, error }] = usePostQuery({
    pause: intId === -1, //if we have a bad query, we just have to pause the query before it is sending to the server
    variables: {
      id: intId,
    },
  });

  if (error) {
    console.log(error.message)
  }

  if (!data?.post) {
    return <Layout>
      <Box>could not find post</Box>
    </Layout>
  }

  if (fetching) {
    return <Layout><div>...loading</div></Layout>
  }

  return <Layout><Heading mb={4}>{data.post.title}</Heading>{data.post.text}</Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
