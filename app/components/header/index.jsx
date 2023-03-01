import { Box, Flex } from '@chakra-ui/react';
import { Link } from '@remix-run/react';

import Menu from './Menu';
import MobilMenu from './MobilMenu';
import SearchButton from './SearchButton';
import SocialNav from './SocialNav';
import TagCloud from './TagCloud';

/**
 * @name Header
 * @description The header
 */
export const Header = ({ tagClouds, menuItems, hasGateBanner }) => {
  const jsDate = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateToday = jsDate.toLocaleString('hu-HU', options);
  return (
    <Box
      as="header"
      transition="transform ease .25s"
      maxWidth="1210px"
      width="100%"
      position="relative"
      top={hasGateBanner ? { base: '3', md: '250px' } : '3'}
      ml="auto"
      mr="auto"
    >
      <Flex
        alignItems="center"
        direction="column"
        bg="white"
        pb="7px"
        pt={{ base: 0, lg: '3' }}
      >
        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          mb="5"
          px={{ md: '1.875rem' }}
        >
          <Flex alignItems="center">
            <SiteLogo />
            <TagCloud tagClouds={tagClouds} />
          </Flex>
          <Flex direction="column">
            <MobilMenu />
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <SearchButton />
              <SocialNav />
            </Flex>
            <Box
              mt="10px"
              mx="0.6rem"
              color="#9D9D9D"
              textTransform="uppercase"
              fontSize="13px"
              display={{ base: 'none', lg: 'block' }}
            >
              {dateToday}
            </Box>
          </Flex>
        </Flex>
        <Menu menuItems={menuItems} />
      </Flex>
    </Box>
  );
};

const SiteLogo = () => {
  return (
    <Box
      display="block"
      flexShrink="0"
      ml={{ base: '25px', md: '0' }}
    >
      <Link to="/">
        <Box
          as="img"
          src="/images/szinhaz_logo.png"
          width="200px"
          transform="translateZ(0)"
        />
      </Link>
    </Box>
  );
};
