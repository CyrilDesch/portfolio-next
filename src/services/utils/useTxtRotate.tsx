import useIsomorphicLayoutEffect from "./AppConfig";

class Anim {
  el: HTMLElement;
  toRotate: string;
  period: number;
  txt: string;
  isDeleting: boolean;
  timeoutId: number | null;

  constructor(el: HTMLElement, toRotate: string, period: string | null) {
    this.el = el;
    this.toRotate = toRotate;
    this.period = parseInt(period ?? "1000", 10);
    this.txt = "";
    this.isDeleting = false;
    this.timeoutId = null;
    this.tick = this.tick.bind(this);
    this.tick();
  }

  tick() {
    const fullTxt = this.toRotate;

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
      delta = 100;
    }

    this.timeoutId = window.setTimeout(this.tick, delta);
  }

  stop() {
    if (this.timeoutId !== null) {
      window.clearTimeout(this.timeoutId);
    }
  }
}

const useTxtRotate = (text: string) => {
  useIsomorphicLayoutEffect(() => {
    // Clear any previous animations
    const elements = document.getElementsByClassName("txt-rotate");

    const animInstances: Anim[] = Array.from(elements).map((element) => {
      const el = element as HTMLElement;
      const toRotate = text;
      const period = el.getAttribute("data-period");
      return new Anim(el, toRotate, period);
    });

    const css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1vw solid white }";
    document.body.appendChild(css);

    // Cleanup function to stop all animations
    return () => {
      animInstances.forEach((anim) => anim.stop());
      document.body.removeChild(css);
    };
  }, [text]); // Runs every time the 'text' changes
};

export default useTxtRotate;
