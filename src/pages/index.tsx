import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../graphql/generated/index";
import { Layout } from "../components/Layout";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Index = () => {
  const [{data}] = usePostsQuery();
  return (
    <Layout>
      <NextLink href='/create-post'>
        <Link>Create Post</Link>
      </NextLink>
      <br></br>
      {!data ? <div>loading...</div> : data.posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);
