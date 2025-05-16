'use client';

import { useEffect, useState } from 'react';

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = Math.abs(currentY - lastY);

      if (diff < 10) return;

      setDirection(currentY > lastY ? 'down' : 'up');
      setScrollY(currentY);
      lastY = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { direction, scrollY };
};
