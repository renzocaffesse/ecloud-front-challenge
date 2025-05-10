'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import NavDesktopClient from './NavDesktop.client';
import NavMobileClient from './NavMobile.client';
import { useState } from 'react';
import ReservaDrawer from '../ReservaDrawer/ReservaDrawer.client';

// Decide qué versión del nav mostrar (mobile o desktop)
const NavOrchestrator = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {isDesktop ? (
        <NavDesktopClient onOpenDrawer={() => setIsDrawerOpen(true)} />
      ) : (
        <NavMobileClient onOpenDrawer={() => setIsDrawerOpen(true)} />
      )}
      {/* Drawer de reservas que se muestra desde ambos layouts */}
      <ReservaDrawer
        open={isDrawerOpen}
        onOpenChange={(details) => setIsDrawerOpen(details.open)}
      />
    </>
  );
};

export default NavOrchestrator;
