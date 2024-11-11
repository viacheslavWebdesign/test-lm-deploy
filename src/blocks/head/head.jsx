import { Logo } from "../../components/logo";
import { Technology } from "../../components/technology";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Head() {
  useEffect(() => {
    gsap.to(".headSection", {
      scrollTrigger: {
        trigger: ".headSection",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: true,
      },
      y: "30vh",
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="headSection relative">
      <div className="overflow-hidden">
        <div className="w-full max-w-screen-xl px-5 mx-auto relative py-10 flex flex-col justify-end min-h-[calc(50vh-72px)] md:min-h-[calc(50vh-104px)]">
          <div className="absolute right-0 bottom-0 size-64 md:size-96 translate-y-1/3 opacity-30">
            <Logo defaultActive="true" />
          </div>
          <div className="relative z-[1]">
            <h1 className="font-machina font-bold tracking-tighter text-5xl md:text-8xl">
              Створюємо сайти <br />
              із сенсом
            </h1>
            <p className="tracking-tight text-base md:text-lg font-medium opacity-80 mt-4 md:mt-0">
              Перетворюємо сайт на робочий інструмент для вашого маркетингу і
              бізнесу
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-zinc-900 py-4 md:py-0 shadow-inner">
        <div className="w-full max-w-screen-xl px-5 mx-auto md:flex">
          <Technology href="#">WordPress</Technology>
          <Technology href="#">Shopify</Technology>
          <Technology href="#">Webflow</Technology>
        </div>
      </div>
    </section>
  );
}
