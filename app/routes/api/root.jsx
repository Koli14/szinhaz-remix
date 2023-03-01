import { json } from '@remix-run/node';

import { fetchFromGraphQL, gql } from '~/utils';

export const loader = async () => {
  const getRootQuery = gql`
    query getRoot {
      tagCloud {
        tagCloud {
          tagCloud {
            name
            slug
            taxonomyName
            taxonomyColor {
              taxColor
            }
          }
        }
      }
      menuItems(first: 100, where: { location: PRIMARY }) {
        nodes {
          key: id
          parentId
          title: label
          uri
        }
      }
      bannerek {
        bannerek {
          gatebanner {
            kep {
              sourceUrl
            }
            link {
              url
            }
          }
          gatebannermobile {
            kep {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const res = await fetchFromGraphQL(getRootQuery);

  return json(await res.json());
};
