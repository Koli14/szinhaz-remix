import { Box } from '@chakra-ui/react'
import { CloudTag } from '~/components/Tags'

export default function TagCloud({ tagClouds }) {
  return (
    <Box
      display={{ base: 'none', lg: 'flex' }}
      flexWrap='wrap'
      maxWidth='650px'
      ml='40px'
    >
      {tagClouds.map((tag) => (
        <CloudTag key={tag.slug} tag={tag} />
      ))}
    </Box>
  )
}
