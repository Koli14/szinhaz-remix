import { Box } from '@chakra-ui/react'
import { IoMenuOutline } from 'react-icons/io5'

export default function MobilMenu() {
  return <MenuButton />
}

const MenuButton = () => (
  <Box
    as='button'
    display={{ base: 'flex', lg: 'none' }}
    alignItems='center'
    justifyContent='center'
    flexShrink='0'
    mr='25px'
  >
    <Box
      boxSize={10}
      color='white'
      as={IoMenuOutline}
      bg='accent.400'
      borderRadius='7px'
    />
  </Box>
)
