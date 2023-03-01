import { AspectRatio, Box, Image } from '@chakra-ui/react';
import { Link } from '@remix-run/react';
import { CoverTag } from '~/components/Tags';
import { CoverExcerpt, CoverHeading } from './CoverItem';

export const FeaturedItem = ({ item, mobileOnly, desktopOnly }) => {
  const image = item.featuredImage.node;
  const tag = item.kiemeltCimke.featuredTag ?? item.tags.nodes[0];
  const isBig = !mobileOnly && !desktopOnly;
  const bgColor = tag.taxonomyColor?.taxColor ?? '#eda407';
  return (
    <Box
      display={{
        base: desktopOnly ? 'none' : 'block',
        lg: mobileOnly ? 'none' : 'block',
      }}
    >
      <FeaturedImage image={image} slug={item.slug} tag={tag} />
      <Link to={'/' + item.slug}>
        <FeaturedHeading
          title={item.title}
          isBig={isBig}
          bgColor={bgColor}
        />
        <CoverExcerpt excerpt={item.excerpt} />
      </Link>
    </Box>
  );
};

const FeaturedImage = ({ image, slug, tag }) => (
  <Box pos="relative" mb={{ lg: '22px' }}>
    <Link to={'/' + slug}>
      <AspectRatio
        ratio={16 / 9}
        role="group"
        cursor="pointer"
        width="100%"
        pos="relative"
      >
        <Box
          as={Image}
          width="900"
          height="550"
          position="absolute"
          boxSize="100%"
          objectFit="cover"
          top="0"
          left="0"
          maxWidth="100%"
          src={image.sourceUrl}
          alt={image.altText}
          title={image.title}
        />
      </AspectRatio>
    </Link>
    <CoverTag tag={tag} />
  </Box>
);

const FeaturedHeading = ({ title, isBig, bgColor }) => (
  <CoverHeading
    title={title}
    bgColor={bgColor}
    fontSize={{
      base: '1.25rem ',
      md: isBig ? '1.67rem' : '1.375rem',
    }}
    color={{
      base: bgColor ? 'white' : 'black',
      md: 'black',
    }}
    backgroundColor={{
      base: bgColor,
      md: 'transparent',
    }}
    px={{ base: '1.75rem', md: '0' }}
    py={{ base: '1rem', md: '0' }}
  />
);
