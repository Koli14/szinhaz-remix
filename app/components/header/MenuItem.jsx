import { Box } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

export default function MenuItem({ menuItem, isLast }) {
  return (
    <Box
      as='li'
      textTransform='uppercase'
      position='relative'
      zIndex='99'
      cursor='pointer'
    >
      <Box
        as={Link}
        px='1.375rem'
        borderRight={isLast ? '0px solid transparent' : '1px solid white'}
        to={menuItem.uri}
      >
        {menuItem.title}
      </Box>
    </Box>
  )
}
