import { NavBar } from "../components/NavBar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { usePostsQuery } from "../gql/graphql";

const Index = () => {
  const [{data}] = usePostsQuery();
  return (
    <>
      <NavBar />
      <div>Goodbye world</div>
      <br></br>
      {!data ? <div>loading...</div> : data.posts.map((post) => <div key={post.id}>{post.title}</div>)}
    </>
  );
};

export default withUrqlClient(createUrqlClient, {ssr: true})(Index);
