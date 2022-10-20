import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { PostSnippetFragment, useVoteMutation } from "../graphql/generated";

interface UpdootSectionProps {
  post: PostSnippetFragment;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
  const [loadingState, setLoadingState] = useState<"updoot-loading" | "downdoot-loading" | "not-loading">("not-loading");
  const [, vote] = useVoteMutation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center" mr="4">
      <IconButton
        aria-label="Updoot post"
        icon={<ChevronUpIcon />}
        onClick={async () => {
          setLoadingState('updoot-loading')
          await vote({
            postId: post.id,
            value: 1,
          });
          setLoadingState('not-loading')
        }}
        isLoading={loadingState === 'updoot-loading'}
      />
      {post.points}
      <IconButton
        aria-label="Downdoot post"
        icon={<ChevronDownIcon />}
        onClick={async () => {
          setLoadingState('downdoot-loading')
          await vote({
            postId: post.id,
            value: -1,
          });
          setLoadingState('not-loading')
        }}
        isLoading={loadingState === 'downdoot-loading'}
      />
    </Flex>
  );
};

export default UpdootSection;
