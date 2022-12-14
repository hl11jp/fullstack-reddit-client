import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMeQuery } from "../graphql/generated";

export const useIsAuth = () => {
  const [{data, fetching}] = useMeQuery();
  const router = useRouter();
  useEffect(() => {
    if (!fetching && !data?.me) {
      router.replace('/login?next=' + router.pathname);
    }
  }, [fetching, data, router])
}