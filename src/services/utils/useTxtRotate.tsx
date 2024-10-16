import { useRef } from "react";
import useIsomorphicLayoutEffect from "./AppConfig";

class Anim {
  el: HTMLElement;
  toRotate: string[];
  period: number;
  loopNum: number;
  txt: string;
  isDeleting: boolean;
  frameId: number | null;

  constructor(el: HTMLElement, toRotate: string[], period: string | null) {
    this.el = el;
    this.toRotate = toRotate;
    this.loopNum = 0;
    this.period = parseInt(period ?? "1000", 10);
    this.txt = "";
    this.isDeleting = false;
    this.frameId = null;
    this.tick = this.tick.bind(this);
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 150 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 3;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    this.frameId = window.requestAnimationFrame(() => {
      setTimeout(this.tick, delta);
    });
  }

  stop() {
    if (this.frameId !== null) {
      window.cancelAnimationFrame(this.frameId);
    }
  }
}

const useTxtRotate = () => {
  const animsRef = useRef<Anim[]>([]); // Utilisation d'un ref pour stocker les instances de l'animation

  useIsomorphicLayoutEffect(() => {
    // S'assurer que l'animation est créée une seule fois
    if (animsRef.current.length === 0) {
      const elements = document.getElementsByClassName("txt-rotate");

      Array.from(elements).forEach((element) => {
        const el = element as HTMLElement;
        const toRotate = el.getAttribute("data-rotate");
        const period = el.getAttribute("data-period");
        if (toRotate) {
          const animInstance = new Anim(el, JSON.parse(toRotate), period);
          animsRef.current.push(animInstance); // Stocker l'instance de l'animation dans le ref
        }
      });

      const css = document.createElement("style");
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1vw solid white }";
      document.body.appendChild(css);
    }
  }, []); // Assure que l'effet ne s'exécute qu'une fois au montage
};

export default useTxtRotate;
