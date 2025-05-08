'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import NavDesktopClient from './NavDesktop.client';
import NavMobileClient from './NavMobile.client';

// Decide qué nav mostrar según el breakpoint.
const NavOrchestrator = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return isDesktop ? <NavDesktopClient /> : <NavMobileClient />;
};

export default NavOrchestrator;
