import { Box, Flex } from '@chakra-ui/react';
import MenuItem from './MenuItem';

export default function Menu({ menuItems }) {
  const hierarchicalList = flatListToHierarchical(menuItems);

  return (
    <Box
      as="nav"
      width="100%"
      display={{ base: 'none', lg: 'block' }}
    >
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
  );
}

const flatListToHierarchical = (
  data = [],
  {
    idKey = 'key',
    parentKey = 'parentId',
    childrenKey = 'children',
  } = {}
) => {
  const tree = [];
  const childrenOf = {};
  data.forEach((item) => {
    const newItem = { ...item };
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
    childrenOf[id] = childrenOf[id] || [];
    newItem[childrenKey] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(
          newItem
        )
      : tree.push(newItem);
  });
  return tree;
};

const SiteMenu = ({ children }) => (
  <Flex
    as="ul"
    justifyContent="center"
    listStyleType="none"
    align="center"
    bg="accent.400"
    minHeight="53px"
    lineHeight="53px"
    color="white"
    fontFamily="'Bellefair', serif"
    letterSpacing="1.9px"
    fontSize="19px"
  >
    {children}
  </Flex>
);
