import { AspectRatio, Box, Flex, Heading, Image } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { Tag } from '~/components/Tags'

export const CoverItem = ({ item }) => {
  const image = item.featuredImage?.node
  const src = image?.mediaDetails.sizes.find(
    (size) => size.name === 'thumbnail',
  ).sourceUrl
  return (
    <Flex
      as='article'
      mx={{ base: '0.5rem', lg: 'auto' }}
      my={{ base: '1rem', lg: 'auto' }}
      direction={{ base: 'row', md: 'column' }}
    >
      <Box
        display={{ base: 'block', md: 'none' }}
        minWidth='100px'
        minHeight='100px'
        mx='1rem'
      >
        <Link to={'/' + item.slug}>
          <AspectRatio ratio='1' role='group' cursor='pointer' width='100%'>
            <Box
              as={Image}
              src={src}
              alt={image?.altText}
              title={image?.title}
            />
          </AspectRatio>
        </Link>
      </Box>
      <Flex flexGrow='1' direction='column'>
        <Box mb='6px'>
          <Tag tag={item.kiemeltCimke.featuredTag ?? item.tags.nodes[0]} />
        </Box>
        <Link to={'/' + item.slug}>
          <CoverHeading title={item.title} />
          <CoverExcerpt excerpt={item.excerpt} />
        </Link>
      </Flex>
    </Flex>
  )
}

export const CoverHeading = ({ title, ...props }) => (
  <Heading
    width='100%'
    as='h4'
    fontFamily="'Noto Serif', serif"
    fontSize={{ base: '1.0625rem ', md: '1.375rem' }}
    lineHeight='1.25'
    fontWeight='400'
    pb={{ base: '1rem', md: '0' }}
    dangerouslySetInnerHTML={{ __html: title }}
    {...props}
  />
)

export const CoverExcerpt = ({ excerpt }) => (
  <Box
    display={{ base: 'none', md: 'block' }}
    mt='10px'
    mb='16px'
    flex='1'
    color='gray.700'
    dangerouslySetInnerHTML={{ __html: excerpt }}
  />
)
