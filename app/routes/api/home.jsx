import { json } from '@remix-run/node';

import { fetchFromGraphQL, gql } from '~/utils';

export const loader = async () => {
  const getHomeQuery = gql`
    query getHome {
      folder(id: "cimlap", idType: SLUG) {
        posts(
          first: 100
          where: { orderby: { field: MENU_ORDER, order: ASC } }
        ) {
          nodes {
            excerpt
            title
            slug
            kiemeltCimke {
              featuredTag {
                name
                slug
                taxonomyColor {
                  taxColor
                }
              }
            }
            tags {
              nodes {
                name
                slug
                taxonomyColor {
                  taxColor
                }
              }
            }
            featuredImage {
              node {
                title
                altText
                sourceUrl
                mediaDetails {
                  sizes {
                    name
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetchFromGraphQL(getHomeQuery);
  return json(await res.json());
};
