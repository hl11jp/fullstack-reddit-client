
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-urql"]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
