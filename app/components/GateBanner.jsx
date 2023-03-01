import { Box } from '@chakra-ui/react';
import { Link } from '@remix-run/react';

export const GateBanner = ({ banners }) => {
  const { kep, link } = banners?.gatebanner;
  const { kep: mobileKep } = banners?.gatebannermobile;
  return (
    <Box
      position={{ base: 'static', md: 'fixed' }}
      top="0"
      left="0"
      right="0"
      bottom="0"
    >
      <Link to={link}>
        <Box
          as="img"
          src={kep.sourceUrl}
          alt="gate_Banner"
          objectFit="cover"
          width="100%"
          objectPosition="top"
          display={{ base: 'none', md: 'block' }}
        />
        {mobileKep && (
          <Box
            as="img"
            src={mobileKep.sourceUrl}
            alt="gate_Banner"
            width="100%"
            display={{ base: 'block', md: 'none' }}
          />
        )}
      </Link>
    </Box>
  );
};
