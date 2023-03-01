import { json } from '@remix-run/node';

import { fetchFromGraphQL, gql } from '~/utils';

export const loader = async () => {
  const getTagCloudQuery = gql`
    query getTagCloud {
      tagCloud {
        tagCloud {
          tagCloud {
            name
            slug
            taxonomyColor {
              taxColor
            }
          }
        }
      }
    }
  `;

  const res = await fetchFromGraphQL(getTagCloudQuery);

  return json(await res.json());
};
