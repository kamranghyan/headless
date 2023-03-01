import { gql } from "@apollo/client";

export const WebStories = `
query GETALLWEBSTORIES {
  webStories(first: 10) {
    nodes {
      title
      slug
      link
      id
      featuredImage {
        node {
          mediaItemUrl
          altText
          description
        }
      }
    }
  }
}

`

export const GET_STORIES = gql`
  ${WebStories}
`