'use client';

import { useBreakpointValue } from '@chakra-ui/react';
import NavDesktopClient from './NavDesktop.client';
import NavMobileClient from './NavMobile.client';
import { useState } from 'react';
import ReservaDrawer from '../ReservaDrawer/ReservaDrawer.client';
import NavWrapper from './NavWrapper.client';

// Componente que controla el layout del Nav completo
const NavOrchestrator = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true }) ?? false;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavWrapper isDesktop={isDesktop} isMenuOpen={isMenuOpen}>
      {isDesktop ? (
        <NavDesktopClient onOpenDrawer={() => setIsDrawerOpen(true)} />
      ) : (
        <NavMobileClient
          onOpenDrawer={() => setIsDrawerOpen(true)}
          setMenuOpen={setIsMenuOpen}
        />
      )}

      <ReservaDrawer
        open={isDrawerOpen}
        onOpenChange={(details) => setIsDrawerOpen(details.open)}
      />
    </NavWrapper>
  );
};

export default NavOrchestrator;
