import { Box } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

export const CloudTag = ({ tag }) => {
  let color = tag.taxonomyColor?.taxColor ?? '#eda407'

  return (
    <Tag
      tag={tag}
      color={color}
      bg={'white'}
      mx='11px'
      my='3px'
      _hover={{
        bg: color,
        color: 'white',
      }}
    />
  )
}

export const CoverTag = ({ tag }) => {
  return (
    <Tag
      tag={tag}
      pos='absolute'
      left={{ base: '1.75rem', md: '0' }}
      bottom='0'
      py='6px'
      px='16px'
      bg='white'
      color='black'
      borderRadius='0'
      _hover={null}
    />
  )
}

export const Tag = ({ tag, ...props }) => {
  let bgColor = tag.taxonomyColor?.taxColor ?? '#eda407'
  return (
    <Box
      as={Link}
      to={'/tags/' + tag.slug}
      transition='all ease 0.25s'
      px='10px'
      py='2px'
      fontSize={{ base: '12px', md: '14px' }}
      letterSpacing=' 0.84px'
      textTransform='uppercase'
      fontWeight='800'
      border='1px solid transparent'
      color='white'
      bg={bgColor}
      borderRadius='full'
      whiteSpace='nowrap'
      _hover={{
        bg: 'white',
        color: bgColor,
        borderColor: bgColor,
      }}
      {...props}
    >
      {tag.name}
    </Box>
  )
}

export const Tags = ({ tags }) => {}
