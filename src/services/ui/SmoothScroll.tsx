"use client";

import Lenis from "lenis";
import { ReactElement, useEffect, useRef } from "react";

const SmoothScrolling = ({ children }: { children: ReactElement }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrolling;
