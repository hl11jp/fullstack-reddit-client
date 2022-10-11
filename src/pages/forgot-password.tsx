import { Flex, Button, Box, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import router, { useRouter } from "next/router";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { toErrorMap } from "../utils/toErrorMap";
import login from "./login";
import NextLink from "next/link";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useForgotPasswordMutation } from "../gql/graphql";
import { useState } from "react";

const forgotPassword: React.FC<{}> = () => {
  const [completeInput, setCompleteInput] = useState(false);
  const [, forgotPassword] = useForgotPasswordMutation();
  return (
    <Wrapper>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          const response = await forgotPassword(values);
          if (response) setCompleteInput(!completeInput);
        }}
      >
        {({ isSubmitting }) => completeInput ? <Box>We will sent an email to that account!!</Box> :  (
          <Form>
            <InputField
              name="email"
              placeholder="email"
              label="email"
              type="email"
            />
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              variant="solid"
            >
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(forgotPassword);
