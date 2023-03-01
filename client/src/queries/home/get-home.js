import { gql } from "@apollo/client";
import MenuFragment from "../fragments/menus";
import {HeaderFooter} from "../get-menus";
import SeoFragment from "../fragments/seo";

export const GET_HOME = gql`
	query GET_HOME($uri: String) {
      ${HeaderFooter}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    slug
	    uri
	    seo {
          ...SeoFragment
        }
	  }
      posts: posts(first: 7, where: {categoryIn: [23]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      soccer_posts: posts(first: 7,where: {categoryIn: [24]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      health_posts: posts(first: 4,where: {categoryIn: [30]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      business_posts: posts(first: 4,where: {categoryIn: [31]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      pick_posts: posts(first: 4,where: {categoryIn: [11]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      prediction_posts: posts(first: 4,where: {categoryIn: [10]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      wwe_posts: posts(first: 4,where: {categoryIn: [26]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      bb_posts: posts(first: 4,where: {categoryIn: [29]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      anime_posts: posts(first: 4,where: {categoryIn: [28]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      gaming_posts: posts(first: 4,where: {categoryIn: [27]}) {
        nodes {
          id
          link
          title
          featuredImage {
            node {
                mediaItemUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
      trendings: posts(where: {categoryIn: "7"}) {
        nodes {
          id
          link
          title
          categories {
            nodes {
              name
            }
          }
        }
      }
      web_stories: webStories(first: 10) {
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
     
	${MenuFragment}
	${SeoFragment}
`;