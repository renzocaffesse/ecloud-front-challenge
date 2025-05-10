import { Box, Text } from '@chakra-ui/react';

const IntroMessageSection = () => {
  return (
    <Box
      as="section"
      width="100%"
      bg="white"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 0 }}
      textAlign="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontWeight={300}
        fontSize={{ base: '40px', md: '72px' }}
        lineHeight={{ base: '56px', md: '98px' }}
        letterSpacing={{ base: '-0.02em', md: '-0.04em' }}
        color="rgba(43, 43, 43, 1)"
        px={0}
        textAlign="center"
      >
        Un hogar con espacio para coworkear, <br />
        conectarte con{' '}
        <Box
          as="span"
          bg="rgba(61, 99, 169, 1)"
          px={{ base: 3, md: 2 }}
          py={{ base: 1, md: 0.5 }}
          color="white"
          fontWeight="700"
          display="inline"
          whiteSpace="nowrap"
          lineHeight="inherit"
        >
          aventuras locales
        </Box>{' '}
        <br />
        y personas increíbles.
      </Text>
    </Box>
  );
};

export default IntroMessageSection;
