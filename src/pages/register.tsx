import {
  Box,
  Button
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useRegisterMutation } from "../gql/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

// const REGISTER_MUT = gql`
//   mutation Register($username: String!, $password: String!) {
//     register(options: { username: $username, password: $password }) {
//       errors {
//         field
//         message
//       }
//       user {
//         id
//         username
//       }
//     }
//   }
// `;

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  // const [, register] = useMutation(REGISTER_MUT); //after generate graphql types, you can use the hook that it generated for you!
  const [, register] = useRegisterMutation();

  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const respsonse = await register(values);
          if (respsonse.data?.register.errors) {
            setErrors(toErrorMap(respsonse.data.register.errors));
          } else if (respsonse.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              variant="solid"
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
