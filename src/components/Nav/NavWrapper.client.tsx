'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isDesktop: boolean;
  isMenuOpen: boolean;
};

const NavWrapper = ({ children, isDesktop, isMenuOpen }: Props) => {
  const scrollDir = useScrollDirection();
  const shouldHideNav = scrollDir === 'down' && !isMenuOpen;

  const top = isDesktop ? 8 : 0;

  // en mobile necesito empujarlo más para que desaparezca del todo
  const transform = shouldHideNav
    ? isDesktop
      ? 'translateY(-200%)'
      : 'translateY(-400%)'
    : 'translateY(0)';

  return (
    <Box
      as="header"
      position="fixed"
      top={top}
      left={0}
      right={0}
      zIndex="30"
      transition="transform 0.3s ease"
      transform={transform}
      willChange="transform"
    >
      {/* header que se esconde al scrollear hacia abajo y reaparece al subir */}
      <Flex
        as="nav"
        justify="space-between"
        align="center"
        px={{ base: 6, lg: 20 }}
        py={{ base: 4, md: 0 }}
        width="100%"
      >
        {children}
      </Flex>
    </Box>
  );
};

export default NavWrapper;
