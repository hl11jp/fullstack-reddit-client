import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useForgotPasswordMutation } from "../graphql/generated/index";
import { createUrqlClient } from "../utils/createUrqlClient";

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
