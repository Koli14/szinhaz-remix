import { Box, Flex } from '@chakra-ui/react'
import type { hierarchicalMenuItemType } from './MenuItem'
import MenuItem from './MenuItem'

export type flatMenuItemType = {
  key: string
  parentId: string
  title: string
  uri: string
}

export type MenuProps = {
  menuItems: flatMenuItemType[]
}

type childrenOfType = {
  [key: string]: hierarchicalMenuItemType[]
}

export default function Menu({ menuItems }: MenuProps) {
  const hierarchicalList = flatListToHierarchical(menuItems)

  return (
    <Box as='nav' width='100%' display={{ base: 'none', lg: 'block' }}>
      <SiteMenu>
        {hierarchicalList.map((menuItem, index) => (
          <MenuItem
            key={menuItem.key}
            menuItem={menuItem}
            isLast={hierarchicalList.length - 1 === index}
          />
        ))}
      </SiteMenu>
    </Box>
  )
}

const flatListToHierarchical = (data: flatMenuItemType[] = []) => {
  const tree: hierarchicalMenuItemType[] = []
  const childrenOf: childrenOfType = {}
  data.forEach((item) => {
    const newItem: hierarchicalMenuItemType = { ...item }
    const { key: id, parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem.children = childrenOf[id]
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

const SiteMenu = ({ children }: { children: React.ReactNode }) => (
  <Flex
    as='ul'
    justifyContent='center'
    listStyleType='none'
    align='center'
    bg='accent.400'
    minHeight='53px'
    lineHeight='53px'
    color='white'
    fontFamily="'Bellefair', serif"
    letterSpacing='1.9px'
    fontSize='19px'
  >
    {children}
  </Flex>
)
