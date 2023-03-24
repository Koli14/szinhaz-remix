import type { LoaderArgs } from '@remix-run/node'
import { json } from '@remix-run/node'

import { fetchFromGraphQL, gql } from '~/utils'

export const loader = async (args: LoaderArgs) => {
  const { postId } = args.params
  const getPostQuery = gql`
    query getPost($postId: ID!) {
      post(id: $postId, idType: SLUG) {
        title
        content
        date
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
      }
    }
  `

  const res = await fetchFromGraphQL(getPostQuery, { postId })
  return json(await res.json())
}
