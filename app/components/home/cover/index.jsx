import { Box } from '@chakra-ui/react';
import { CoverItem } from './CoverItem';
import { FeaturedItem } from './FeaturedItem';

export const LeftCoverItems = ({ featuredItems, items }) => {
  return (
    <Box flex="2" mr={{ base: 0, lg: 3 }}>
      <FeaturedItem item={featuredItems[0]} />
      <FeaturedItem item={featuredItems[1]} mobileOnly />
      {items.map((item) => (
        <CoverItem key={item.slug} item={item} />
      ))}
    </Box>
  );
};

export const RightCoverItems = ({ featuredItem, items }) => {
  return (
    <Box flex="1" ml={{ base: 0, lg: 3 }}>
      <FeaturedItem item={featuredItem} desktopOnly />
      {items.map((item) => (
        <CoverItem key={item.slug} item={item} />
      ))}
    </Box>
  );
};
