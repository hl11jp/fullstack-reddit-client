import { useRouter } from "next/router";
import { usePostQuery } from "../graphql/generated";

export const useGetPostFromUrl = () => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  return usePostQuery({
    pause: intId === -1, //if we have a bad query, we just have to pause the query before it is sending to the server
    variables: {
      id: intId,
    },
  });
};
