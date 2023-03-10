import { Box } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

export type hierarchicalMenuItemType = {
  key: string
  parentId: string
  title: string
  uri: string
  children?: hierarchicalMenuItemType[]
}

export type MenuItemProps = {
  menuItem: hierarchicalMenuItemType
  isLast: boolean
}

export default function MenuItem({ menuItem, isLast }: MenuItemProps) {
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
