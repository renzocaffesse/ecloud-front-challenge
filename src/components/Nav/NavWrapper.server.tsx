import { Box, Flex } from "@chakra-ui/react";
import NavOrchestrator from "./NavOrchestrator.client";

// Wrapper principal del nav. Server Component que arma el layout general.
const NavWrapper = () => {
  return (
    <Box as="header" position="absolute" top={10} left={0} right={0} zIndex="10">
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={{ base: 6, md: 10, lg: 14, xl: 20 }}
        py={{ base: 4, md: 6 }}
        width="100%"
      >
        <NavOrchestrator />
      </Flex>
    </Box>
  );
};

export default NavWrapper;
