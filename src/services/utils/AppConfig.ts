import { useEffect, useLayoutEffect } from "react";

export const AppConfig = {
  siteName: "Portfolio",
  author: "Cyril Deschamps",
};

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
export default useIsomorphicLayoutEffect;
