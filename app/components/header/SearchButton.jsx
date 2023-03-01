import { Box } from '@chakra-ui/react';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchButton() {
  return (
    <Box
      aria-label="Keresés"
      as="button"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background-color ease 0.25s"
      bg="accent.400"
      mr="2"
      color="white"
      borderRadius="full"
      _hover={{ bg: 'accent.400' }}
      flexShrink="0"
      boxSize="28px"
      ml={{ base: 'auto' }}
    >
      <Box boxSize="20px" color="white" as={IoSearchSharp} />
    </Box>
  );
}
