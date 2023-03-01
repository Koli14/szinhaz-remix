import { json } from '@remix-run/node';

import { fetchFromGraphQL, gql } from '~/utils';

export const loader = async (args) => {
  const { params } = args;
  const { page = 1 } = params;

  const getPostsQuery = gql`
    query {
      posts {
        nodes {
          id
          title
        }
      }
    }
  `;

  const res = await fetchFromGraphQL(getPostsQuery, { page });

  return json(await res.json());
};
