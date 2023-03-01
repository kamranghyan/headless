import { gql } from "@apollo/client";

export const GET_CRICKET_FEEDS = gql`
 query GET_CRICKET_FEEDS {
  posts(where: {categoryId: 23}) {
    edges {
      node {
        id
        title
        excerpt
        slug
      }
    }
  }
 }
 `;
