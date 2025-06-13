"use client";

import { useEffect, useState } from "react";

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let timeout: NodeJS.Timeout | null = null;

    const onScroll = () => {
      if (timeout) return;
      timeout = setTimeout(() => {
        const currentY = window.scrollY;
        const diff = Math.abs(currentY - lastY);

        if (diff >= 10) {
          setDirection(currentY > lastY ? "down" : "up");
          setScrollY(currentY);
          lastY = currentY;
        }

        timeout = null;
      }, 100);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { direction, scrollY };
};
