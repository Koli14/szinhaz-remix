import { Box, Flex } from '@chakra-ui/react'
import { useLoaderData } from '@remix-run/react'
import { LeftCoverItems, RightCoverItems } from '~/components/home/cover'

export { loader } from '~/routes/api.home'

const Index = () => {
  const loader = useLoaderData()
  const { nodes: items } = loader.data.folder.posts
  const featuredItems = [items[0], items[6]]
  const leftItems = items.slice(1, 6)
  const rightItems = items.slice(7)
  return (
    <Box>
      <Flex as='section' direction={{ base: 'column', lg: 'row' }}>
        <LeftCoverItems featuredItems={featuredItems} items={leftItems} />
        <RightCoverItems featuredItem={featuredItems[1]} items={rightItems} />
      </Flex>
    </Box>
  )
}

export default Index
