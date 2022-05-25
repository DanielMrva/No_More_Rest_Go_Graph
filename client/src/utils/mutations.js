import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const SAVE_BOOK = gql`
    mutation saveBook($_id: String!,
    $authors: [String!]!,
    $description: String!, 
    $bookId: String!,
    $image: String!,
    $link: String!,
    $title: String!
    ) {
        user {
            _id
            username
            savedBooks
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($_id: String!, $bookId: String!) {
        user {
            _id
            username
            savedBooks
        }
    }
`;
