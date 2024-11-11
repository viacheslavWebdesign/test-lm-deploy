import Link from "next/link";
import { UiButton } from "../../components/uikit/ui-button";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowTopUpIcon } from "../../components/uikit/icons/arrow-top-up";

gsap.registerPlugin(ScrollTrigger);

const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

const case1Src = `${basePath}/images/cases/27.jpg`;
const case2Src = `${basePath}/images/cases/ltr-min-1.jpg`;
const case3Src = `${basePath}/images/cases/mens-min-1.jpg`;
const case4Src = `${basePath}/images/cases/vid-min-1.jpg`;
const case5Src = `${basePath}/images/cases/super-min-1.jpg`;

export function Cases() {
  const [isDOMReady, setIsDOMReady] = useState(false);
  const casesRef = useRef();
  const casesContainerRef = useRef();
  const casesSectionRef = useRef();
  useEffect(() => {
    setIsDOMReady(true);
  }, []);
  useEffect(() => {
    if (!isDOMReady) return;
    function getScrollAmount() {
      let casesWidth = casesRef.current.scrollWidth;
      const containerStyle = window.getComputedStyle(casesContainerRef.current);
      let containerWidth =
        casesContainerRef.current.offsetWidth -
        parseFloat(containerStyle.paddingLeft) -
        parseFloat(containerStyle.paddingRight);
      return -(casesWidth - containerWidth);
    }
    const tween = gsap.to(casesRef.current, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: casesSectionRef.current,
      start: "top 0%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
    });
    gsap.utils.toArray(".linkMouseBox").forEach((box) => {
      const follower = box.querySelector(".linkMouse");
      gsap.set(follower, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 1,
      });
      const xTo = gsap.quickTo(follower, "x", {
        duration: 0.2,
        ease: "power1",
      });
      const yTo = gsap.quickTo(follower, "y", {
        duration: 0.2,
        ease: "power1",
      });
      const scaleTween = gsap.to(follower, {
        scale: 1,
        ease: "power1.inOut",
        paused: true,
      });

      const handleMouseEnter = () => scaleTween.play();
      const handleMouseLeave = () => scaleTween.reverse();
      const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        xTo(offsetX);
        yTo(offsetY);
      };

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
      box.addEventListener("mousemove", handleMouseMove);

      box.querySelectorAll("*").forEach((child) => {
        child.addEventListener("mouseenter", handleMouseEnter);
        child.addEventListener("mouseleave", handleMouseLeave);
        child.addEventListener("mousemove", handleMouseMove);
      });
    });
  }, [isDOMReady]);

  return (
    <div className="bg-zinc-900">
      <section
        ref={casesSectionRef}
        className="relative overflow-hidden bg-zinc-900 pt-20 md:pt-40"
      >
        <div
          ref={casesContainerRef}
          className="w-full max-w-screen-xl px-5 mx-auto"
        >
          <div className="md:flex items-center justify-between mb-10 md:mb-20">
            <h2 className="font-machina tracking-tighter text-4xl md:text-6xl font-bold">
              Наші кейси
            </h2>
            <UiButton isLink href="#" className="hidden md:block">
              Всі кейси
            </UiButton>
          </div>
          <div ref={casesRef} className="flex gap-8 md:gap-16">
            <Link
              className="linkMouseBox relative block w-full md:w-1/2 flex-none"
              href="#"
            >
              <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                <Image
                  src={case1Src}
                  alt="client"
                  width="700"
                  height="400"
                  className="h-full w-full object-cover absolute t-0 l-0"
                />
              </div>
              <h5 className="font-machina tracking-tighter font-bold text-3xl mt-4 mb-2">
                Кейси під NDA
              </h5>
              <p className="opacity-80">
                Багато проєктів ми не можемо показувати в піблічній площині. Але
                досвіду від цього менше не стає
              </p>
              <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
              </div>
            </Link>
            <Link
              className="linkMouseBox relative block w-full md:w-1/2 flex-none"
              href="#"
            >
              <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                <Image
                  src={case2Src}
                  alt="client"
                  width="700"
                  height="400"
                  className="h-full w-full object-cover absolute t-0 l-0"
                />
              </div>
              <h5 className="font-machina tracking-tighter font-bold text-xl md:text-3xl mt-4 mb-2">
                UX-аудит інтернет-магазину кондитерських виробів La-torta
              </h5>
              <p className="opacity-80">
                Як знайти 341 причину зробити редизайн
              </p>
              <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
              </div>
            </Link>
            <Link
              className="linkMouseBox relative block w-full md:w-1/2 flex-none"
              href="#"
            >
              <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                <Image
                  src={case3Src}
                  alt="client"
                  width="700"
                  height="400"
                  className="h-full w-full object-cover absolute t-0 l-0"
                />
              </div>
              <h5 className="font-machina tracking-tighter font-bold text-xl md:text-3xl mt-4 mb-2">
                Створення нової сторінки для мувінгової компанії в Канаді
              </h5>
              <p className="opacity-80">Ефективне рішення для SEO-просування</p>
              <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
              </div>
            </Link>
            <Link
              className="linkMouseBox relative block w-full md:w-1/2 flex-none"
              href="#"
            >
              <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                <Image
                  src={case4Src}
                  alt="client"
                  width="700"
                  height="400"
                  className="h-full w-full object-cover absolute t-0 l-0"
                />
              </div>
              <h5 className="font-machina tracking-tighter font-bold text-xl md:text-3xl mt-4 mb-2">
                Створення нової сторінки для стоматологічної клініки в Лондоні
              </h5>
              <p className="opacity-80">Швидке рішення для запуску реклами</p>
              <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
              </div>
            </Link>
            <Link
              className="linkMouseBox relative block w-full md:w-1/2 flex-none"
              href="#"
            >
              <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                <Image
                  src={case5Src}
                  alt="client"
                  width="700"
                  height="400"
                  className="h-full w-full object-cover absolute t-0 l-0"
                />
              </div>
              <h5 className="font-machina tracking-tighter font-bold text-xl md:text-3xl mt-4 mb-2">
                Розробка сайту для реабілітаційного центру Superhumans
              </h5>
              <p className="opacity-80">
                Як встигнути зробити сайт до відкриття
              </p>
              <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <UiButton isLink href="#" className="inline-block md:hidden">
              Всі кейси
            </UiButton>
          </div>
        </div>
      </section>
    </div>
  );
}
