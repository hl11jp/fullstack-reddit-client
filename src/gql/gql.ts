/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "fragment error on FieldError {\n  field\n  message\n}": types.ErrorFragmentDoc,
    "fragment response on UserResponse {\n  errors {\n    ...error\n  }\n  user {\n    ...user\n  }\n}": types.ResponseFragmentDoc,
    "fragment user on User {\n  id\n  username\n}": types.UserFragmentDoc,
    "mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...response\n  }\n}": types.ChangePasswordDocument,
    "mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}": types.ForgotPasswordDocument,
    "mutation Login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}": types.LoginDocument,
    "mutation Logout {\n  logout\n}": types.LogoutDocument,
    "mutation Register($options: UsernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}": types.RegisterDocument,
    "query Me {\n  me {\n    ...user\n  }\n}": types.MeDocument,
    "query Posts {\n  posts {\n    id\n    createdAt\n    updatedAt\n    title\n  }\n}": types.PostsDocument,
};

export function graphql(source: "fragment error on FieldError {\n  field\n  message\n}"): (typeof documents)["fragment error on FieldError {\n  field\n  message\n}"];
export function graphql(source: "fragment response on UserResponse {\n  errors {\n    ...error\n  }\n  user {\n    ...user\n  }\n}"): (typeof documents)["fragment response on UserResponse {\n  errors {\n    ...error\n  }\n  user {\n    ...user\n  }\n}"];
export function graphql(source: "fragment user on User {\n  id\n  username\n}"): (typeof documents)["fragment user on User {\n  id\n  username\n}"];
export function graphql(source: "mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...response\n  }\n}"): (typeof documents)["mutation changePassword($token: String!, $newPassword: String!) {\n  changePassword(token: $token, newPassword: $newPassword) {\n    ...response\n  }\n}"];
export function graphql(source: "mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"): (typeof documents)["mutation forgotPassword($email: String!) {\n  forgotPassword(email: $email)\n}"];
export function graphql(source: "mutation Login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}"): (typeof documents)["mutation Login($usernameOrEmail: String!, $password: String!) {\n  login(usernameOrEmail: $usernameOrEmail, password: $password) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}"];
export function graphql(source: "mutation Logout {\n  logout\n}"): (typeof documents)["mutation Logout {\n  logout\n}"];
export function graphql(source: "mutation Register($options: UsernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}"): (typeof documents)["mutation Register($options: UsernamePasswordInput!) {\n  register(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...user\n    }\n  }\n}"];
export function graphql(source: "query Me {\n  me {\n    ...user\n  }\n}"): (typeof documents)["query Me {\n  me {\n    ...user\n  }\n}"];
export function graphql(source: "query Posts {\n  posts {\n    id\n    createdAt\n    updatedAt\n    title\n  }\n}"): (typeof documents)["query Posts {\n  posts {\n    id\n    createdAt\n    updatedAt\n    title\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;