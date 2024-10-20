import { useState } from "react";
import useIsomorphicLayoutEffect from "./AppConfig";

interface UseScrollResult {
  scrollTo: (x: number) => void;
  isScrolled: boolean;
}

const useScroll = (): UseScrollResult => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollTo = (y: number) => {
    window.scrollTo({
      top: 0,
      left: y,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollTo, isScrolled };
};

export default useScroll;
